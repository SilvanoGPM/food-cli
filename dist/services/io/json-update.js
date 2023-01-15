"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONUpdate = void 0;
const json_read_1 = require("./json-read");
const json_write_1 = require("./json-write");
async function JSONUpdate({ path, data, encoding = "utf-8", }) {
    try {
        const oldData = await (0, json_read_1.JSONRead)({ path });
        const newData = { ...oldData, ...data };
        await (0, json_write_1.JSONWrite)({ path, data: newData });
    }
    catch {
        throw Error(`Error on update: "${path}"`);
    }
}
exports.JSONUpdate = JSONUpdate;
