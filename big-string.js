import {Buffer as JSBuf} from 'node:buffer';

const Buf = Buffer || JSBuf;
const maxStringLength = 268_435_440;

export default class BigString {
	constructor(string = '') {
		this.string = string;
		this.buffer = Buf.from('');
	}

	calcLength() {
		return this.buffer.length + this.string.length;
	}

	get length() {
		return this.calcLength();
	}

	append(string) {
		if (this.calcLength() + string.length > maxStringLength) {
			this.consolidate();
		}

		this.string += string;
	}

	consolidate() {
		this.buffer = Buf.concat([this.buffer, Buf.from(this.string)]);
		this.string = '';
	}

	toString() {
		if (this.calcLength() > maxStringLength) {
			throw new Error(`String longer than ${maxStringLength} characters.`);
		}

		this.consolidate();
		return this.buffer.toString();
	}

	toBuffer() {
		this.consolidate();
		return this.buffer;
	}
}
