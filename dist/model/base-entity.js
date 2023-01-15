"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    _id;
    constructor(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
exports.BaseEntity = BaseEntity;
