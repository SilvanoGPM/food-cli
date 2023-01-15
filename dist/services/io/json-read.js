"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONRead = void 0;
const fs_1 = require("fs");
async function JSONRead({ path, encoding = "utf-8" }) {
    try {
        const data = await fs_1.promises.readFile(path, { encoding });
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    }
    catch {
        throw Error(`Error on read: "${path}"`);
    }
}
exports.JSONRead = JSONRead;
