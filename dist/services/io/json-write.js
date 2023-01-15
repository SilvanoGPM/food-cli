"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONWrite = void 0;
const fs_1 = require("fs");
async function JSONWrite({ path, data, encoding = "utf-8", }) {
    try {
        await fs_1.promises.writeFile(path, JSON.stringify(data, null, 2), { encoding });
    }
    catch {
        throw Error(`Error on write: "${path}"`);
    }
}
exports.JSONWrite = JSONWrite;
