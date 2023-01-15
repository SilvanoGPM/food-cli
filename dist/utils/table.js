"use strict";
// https://stackoverflow.com/a/69874540
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const console_1 = require("console");
const stream_1 = require("stream");
function table(input) {
    const ts = new stream_1.Transform({ transform(chunk, enc, cb) { cb(null, chunk); } });
    const logger = new console_1.Console({ stdout: ts });
    logger.table(input);
    const table = (ts.read() || '').toString();
    let result = '';
    for (let row of table.split(/[\r\n]+/)) {
        let r = row.replace(/[^┬]*┬/, '┌');
        r = r.replace(/^├─*┼/, '├');
        r = r.replace(/│[^│]*/, '');
        r = r.replace(/^└─*┴/, '└');
        r = r.replace(/'/g, ' ');
        result += `${r}\n`;
    }
    console.log(result);
}
exports.table = table;
