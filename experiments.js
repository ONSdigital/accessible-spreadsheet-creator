import JSZip from "jszip";
import { createWriteStream } from "fs";
import BigString from "./big-string.js";

// Max string length in Buffer
// const string = new BigString();
// while (true) {
//     string.append("".padEnd(1e6, "."));
//     console.log(string.length);
// }

// Zip a billion character string as a buffer
const targetLength = 1e6;
const string = new BigString();

console.log(`Generating string length ${targetLength.toLocaleString()}`);
while (string.length < targetLength) string.append("".padEnd(1e7, "."));

console.log('Zipping string');
const zip = new JSZip();
zip.file("test.txt", string.toBuffer(), { compression: 'DEFLATE' });

zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(createWriteStream('test.zip'))
    .on('finish', () => {
        console.log('test.zip written');
    });
