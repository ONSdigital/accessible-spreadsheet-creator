import { Buffer as JSBuf } from 'buffer';

const Buf = Buffer || JSBuf;
const maxStringLength = 268435440;

export default class BigString {
    constructor(string = "") {
        this.string = string;
        this.buffer = new Buf.from("");
    }
    calcLength() {
        return this.buffer.length + this.string.length;
    }
    get length() {
        return this.calcLength();
    }
    append(string) {
        if (this.calcLength() + string.length > maxStringLength) this.consolidate();
        this.string += string;
    }
    consolidate() {
        this.buffer = Buf.concat([this.buffer, Buf.from(this.string)]);
        this.string = "";
    }
    toString() {
        if (this.calcLength() > maxStringLength) throw Error(`String longer than ${maxLength} characters.`)
        this.consolidate();
        return this.buffer.toString();
    }
    toBuffer() {
        this.consolidate();
        return this.buffer;
    }
}
