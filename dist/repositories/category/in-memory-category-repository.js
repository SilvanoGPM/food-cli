"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCategoryRepository = void 0;
class InMemoryCategoryRepository {
    _data;
    constructor(data) {
        this._data = data;
    }
    async findById(id) {
        return this._data.find((category) => category.id === id);
    }
}
exports.InMemoryCategoryRepository = InMemoryCategoryRepository;
