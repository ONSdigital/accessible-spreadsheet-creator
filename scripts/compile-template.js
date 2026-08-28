// This script takes the raw Mustache template,
// breaks it into chunks and compiles it using Handlebars.js
import {writeFileSync} from 'node:fs';
import Handlebars from 'handlebars';
import templateRaw from '../template-spreadsheets/template-raw.js';

const outpath = './template-spreadsheets/template.js';
const output = [];

// Hack to stringify JS with functions
function stringifyJS(object) {
	const placeholder = '____HANDLEBARS____';
	const fns = [];
	let string = JSON.stringify(object, (key, value) => {
		if (value?.includes?.('"compiler"')) {
			fns.push(value);
			return placeholder;
		}

		return value;
	}, 2);

	string = string.replaceAll(new RegExp('"' + placeholder + '"', 'g'), () => fns.shift());

	return string;
}

function nestTemplate(template) {
	const parts = template.split('{{#sheets}}');
	const chunks = [{type: 'template', contents: Handlebars.precompile(parts.shift())}];
	while (parts.length > 0) {
		const subParts = parts.shift().split('{{/sheets}}');
		if (subParts[0].includes('{{#rows}}')) {
			let sheetParts = subParts[0].split('{{#rows}}');
			sheetParts = [sheetParts[0], ...sheetParts[1].split('{{/rows}}')];
			chunks.push({
				type: 'sheets',
				header: Handlebars.precompile(sheetParts[0]),
				rows: Handlebars.precompile(`{{#rows}}${sheetParts[1]}{{/rows}}`),
				footer: Handlebars.precompile(sheetParts[2]),
			});
		} else {
			chunks.push({type: 'sheets', contents: Handlebars.precompile(subParts[0])});
		}

		if (subParts[1]) {
			chunks.push({type: 'template', contents: Handlebars.precompile(subParts[1])});
		}
	}

	return chunks;
}

for (const fileRaw of templateRaw) {
	const file = {...fileRaw};
	file.contents = file.contents.replaceAll(/\n\s*/gm, ''); // Remove line breaks and whitespace
	if (file.contents.includes('{{#sheets}}')) {
		file.type = 'chunks';
		file.contents = nestTemplate(file.contents);
	} else if (file.contents.includes('{{')) {
		file.type = 'template';
		file.contents = Handlebars.precompile(file.contents);
	} else {
		file.type = 'string';
	}

	output.push(file);
}

const string = `export default ${stringifyJS(output)};`;

writeFileSync(outpath, string);
console.log(`Wrote ${outpath}`);
