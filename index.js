import Ajv from 'ajv';
import Handlebars from 'handlebars';
import odsTemplate from './template-spreadsheets/template.js';
import approxTextWidth from './approx-text-width.js';
import schema from './schema.js';
import BigString from './big-string.js';

let schemaValidator = null;

function intToLetter(i) {
	return String.fromCodePoint('A'.codePointAt(0) + i);
}

function cellReference(col, row) {
	const zeroBasedCol = col - 1;
	if (zeroBasedCol < 26) {
		return intToLetter(zeroBasedCol) + row;
	}

	return intToLetter(Math.floor(zeroBasedCol / 26) - 1) + intToLetter(zeroBasedCol % 26) + row;
}

function formatValues(values, style, allowNulls) {
	if (style === 'text') {
		if (allowNulls) {
			throw new Error('allowNulls is not implemented for string columns.');
		}

		return values.map(d => ({isText: true, displayValue: d}));
	}

	if (!allowNulls && values.includes(null)) {
		throw new Error('A null value exists in a column without allowNulls.');
	}

	if (style === 'number_with_commas') {
		return values.map(d => (
			d === null
				? {isEmptyNumeric: true, style}
				: {
					isNumeric: true, rawValue: d, displayValue: d.toLocaleString('en-GB'), style,
				}
		));
	}

	if (style === 'number_1dp') {
		return values.map(d => (
			d === null
				? {isEmptyNumeric: true, style}
				: {
					isNumeric: true, rawValue: d, displayValue: d.toFixed(1), style,
				}
		));
	}

	if (style === 'number_2dp') {
		return values.map(d => (
			d === null
				? {isEmptyNumeric: true, style}
				: {
					isNumeric: true, rawValue: d, displayValue: d.toFixed(2), style,
				}
		));
	}

	throw new Error('Unrecognised column style: ' + style);
}

function visitNotes(sheet, visitString) {
	visitString(sheet.sheetName, t => {
		sheet.sheetName = t;
	});
	for (let i = 0; i < sheet.sheetIntroText.length; i++) {
		visitString(sheet.sheetIntroText[i], t => {
			sheet.sheetIntroText[i] = t;
		});
	}

	for (const column of sheet.columns) {
		visitString(column.heading, t => {
			column.heading = t;
		});

		if (column.style === 'text') {
			for (let i = 0; i < column.values.length; i++) {
				visitString(column.values[i], t => {
					column.values[i] = t;
				});
			}
		}
	}
}

function processNotes(sourceNotes, sheets) {
	if (!sourceNotes) {
		return [];
	}

	const noteRegExp = /\[\[[^\]]+]]/g;

	let notes = sourceNotes.map(({name, text}) => ({name, text, used: false}));
	const notesMap = new Map(notes.map(note => [`[[${note.name}]]`, note]));

	for (const sheet of sheets) {
		sheet.sheetIntroText ||= [];
		sheet.hasNotes = false;
		visitNotes(sheet, t => {
			// Don't replace [[note_id]] yet; just determine which notes should be on the notes
			// sheet and which sheets have notes.
			for (const noteReference of t.match(noteRegExp) || []) {
				notesMap.get(noteReference).used = true;
				sheet.hasNotes = true;
			}
		});
	}

	notes = notes.filter(n => n.used);
	for (const [i, n] of notes.entries()) {
		n.name = `[note ${i + 1}]`;
	}

	for (const sheet of sheets) {
		if (sheet.hasNotes) {
			const matchReplacer = match => notesMap.get(match).name;
			visitNotes(sheet, (t, tSetterCallback) => {
				tSetterCallback(t.replaceAll(noteRegExp, matchReplacer));
			});
		}
	}

	return notes;
}

function columnWidth(strings) {
	strings = strings.map(s => s || '');
	let maxPixelWidth = 0;
	for (const string_ of strings) {
		const pixelWidth = approxTextWidth(string_);
		if (pixelWidth > maxPixelWidth) {
			maxPixelWidth = pixelWidth;
		}
	}

	// 37.8 pixels per cm, and add a bit in case the width is inaccurate:
	return ((maxPixelWidth / 37.8) + 0.5).toFixed(2);
}

function calculateRowCount(text) {
	const tokens = text.split(' ');
	const columnWidth = 15.45 * 37.8; // Cm * pixels per cm
	const spaceWidth = approxTextWidth(' ');
	let rowCount = 1;
	let rowWidth = approxTextWidth(tokens[0]);
	for (const token of tokens.slice(1)) {
		const tokenWidth = approxTextWidth(token);
		rowWidth += spaceWidth + tokenWidth;
		if (rowWidth > columnWidth) {
			++rowCount;
			rowWidth = tokenWidth;
		}
	}

	return rowCount;
}

function makeCoverSheetContents(coverSheetMarkdown) {
	return coverSheetMarkdown
		.flatMap(d => d.split('\n'))
		.map((item, _i) => {
			if (item.startsWith('## ')) {
				return {isSubtitle: true, text: item.slice(3)};
			}

			if (/^\[.*]\(.*\)$/.test(item)) {
				const tokens = item.slice(1, -1).split('](');
				return {
					isHyperlink: true, text: tokens[0], href: tokens[1], rowCount: calculateRowCount('.'),
				};
			}

			return {isText: true, text: item, rowCount: calculateRowCount(item)};
		});
}

function oneTableMessage(hasNotes) {
	const message = 'This worksheet contains one table.';
	return hasNotes
		? message + ' Some cells refer to notes, which can be found on the notes worksheet.'
		: message;
}

function renderChunk(contents, data) {
	const render = Handlebars.template(contents);
	return render(data);
}

function renderItem(item, data) {
	if (item.type === 'string') {
		return {filename: item.filename, contents: item.contents};
	}

	if (item.type === 'template') {
		return {filename: item.filename, contents: renderChunk(item.contents, data)};
	}

	const string = new BigString();
	for (const chunk of item.contents) {
		if (chunk.type === 'sheets' && chunk.rows) {
			for (const sheet of data.sheets) {
				string.append(renderChunk(chunk.header || chunk.contents, sheet));

				// Table rows are rendered in smaller chunks to avoid a string overflow
				const renderRows = Handlebars.template(chunk.rows);
				const maxRows = 10_000; // Only render up to 10,000 rows at a time
				let i = 0;
				while (i < sheet.rows.length) {
					const rows = sheet.rows.slice(i, i + maxRows);
					string.append(renderRows({rows}));
					i += maxRows;
				}

				string.append(renderChunk(chunk.footer, sheet));
			}
		} else if (chunk.type === 'sheets') {
			for (const sheet of data.sheets) {
				string.append(renderChunk(chunk.contents, sheet));
			}
		} else {
			const render = Handlebars.template(chunk.contents);
			string.append(render(data));
		}
	}

	return {filename: item.filename, contents: string.toBuffer()};
}

export default function createZip(odsData) {
	schemaValidator ||= new Ajv().compile(schema);

	const valid = schemaValidator(odsData);
	if (!valid) {
		console.log(schemaValidator.errors);
		throw new Error('Input did not match the schema');
	}

	const mustacheData = {
		coverSheetTitle: odsData.coverSheetTitle,
		firstTocCell: cellReference(1, 3),
		lastTocCell: cellReference(2, 3 + odsData.sheets.length),
		coverSheetContents: makeCoverSheetContents(odsData.coverSheetContents),
		sheets: structuredClone(odsData.sheets),
	};

	mustacheData.coverSheetRowStyles = [
		...new Set(mustacheData.coverSheetContents.map(d => d.rowCount).filter(Boolean)),
	].map(d => ({
		styleName: 'coverSheetRowStyle_' + d,
		rowHeightCm: (d * 0.53) + 0.4, // Found by trial and error
	}));

	mustacheData.notes = processNotes(odsData.notes, mustacheData.sheets);
	if (mustacheData.notes.length > 0) {
		mustacheData.hasNotes = true;
		mustacheData.firstNotesTableCell = cellReference(1, 3);
		mustacheData.lastNotesTableCell = cellReference(2, 3 + mustacheData.notes.length);
	}

	mustacheData.tableCount = mustacheData.sheets.length + 2 + mustacheData.hasNotes;

	for (let i = 0; i < mustacheData.sheets.length; i++) {
		const sheet = mustacheData.sheets[i];
		sheet.sheetNumber = i + 1;
		sheet.sheetIntroText = [oneTableMessage(sheet.hasNotes), ...(sheet.sheetIntroText || [])];
		sheet.introText = sheet.sheetIntroText.map((t, index) => ({text: t, isLastIntroRow: index === sheet.sheetIntroText.length - 1}));
		sheet.firstTableCell = cellReference(1, 2 + sheet.sheetIntroText.length);
		sheet.lastTableCell = cellReference(sheet.columns.length, 2 + sheet.columns[0].values.length + sheet.sheetIntroText.length);

		for (const column of sheet.columns) {
			column.valuesFormatted = formatValues(column.values, column.style, column.allowNulls);
			column.isNumeric = column.style !== 'text';
			column.headingLines = column.heading.split('\n');
		}

		sheet.rows = [];
		for (let index = 0; index < sheet.columns[0].values.length; index++) {
			sheet.rows.push({cellsInRow: sheet.columns.map(c => c.valuesFormatted[index])});
		}

		sheet.columnStyles = sheet.columns.map((column, index) => {
			const widthCm = Math.max(2.4, columnWidth(column.valuesFormatted.map(d => d.displayValue)));
			return {name: 'colStyle' + i + '_' + index, widthCm};
		});

		for (const column of sheet.columns) {
			// TODO: avoid the need for this by creating a new object for each sheet?
			delete column.values;
			delete column.valuesFormatted;
		}
	}

	return odsTemplate.map(item => renderItem(item, mustacheData));
}
