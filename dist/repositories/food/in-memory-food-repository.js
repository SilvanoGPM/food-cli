"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryFoodRepository = void 0;
class InMemoryFoodRepository {
    _data;
    constructor(data) {
        this._data = data;
    }
    async findById(id) {
        const food = this._data.find((food) => food.id === id);
        if (!food) {
            return null;
        }
        return food;
    }
    async findByName(name) {
        const food = this._data.find((food) => food.name.toLocaleLowerCase().includes(name.toLowerCase()));
        if (!food) {
            return null;
        }
        return food;
    }
    async findManyByName(name) {
        const foods = this._data.filter((food) => food.name.toLocaleLowerCase().includes(name.toLowerCase()));
        return foods;
    }
    async existsByName(name) {
        return this._data.some((food) => food.name.toLocaleLowerCase().includes(name.toLowerCase()));
    }
}
exports.InMemoryFoodRepository = InMemoryFoodRepository;
