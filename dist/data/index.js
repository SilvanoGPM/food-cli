"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCategories = exports.loadFoods = void 0;
const category_1 = require("../model/category");
const food_1 = require("../model/food");
const json_read_1 = require("../services/io/json-read");
function mapMacro(macro) {
    if (!macro) {
        return { quantity: 0, unit: "g" };
    }
    return { quantity: macro.qty, unit: macro.unit };
}
async function loadFoods() {
    const path = "C:\\Users\\usuario\\Documents\\projects\\food-cli\\src\\data\\food.json";
    const rawFoods = await (0, json_read_1.JSONRead)({ path });
    const foods = rawFoods.map((food) => {
        return new food_1.Food({
            name: food.description,
            baseQuantity: food.base_qty,
            baseUnit: food.base_unit,
            categoryId: food.category_id,
            protein: mapMacro(food.attributes.protein),
            carbohydrate: mapMacro(food.attributes.carbohydrate),
            lipid: mapMacro(food.attributes.lipid),
            fiber: mapMacro(food.attributes.fiber),
            energy: food.attributes.energy,
        }, food.id);
    });
    return foods;
}
exports.loadFoods = loadFoods;
async function loadCategories() {
    const path = "C:\\Users\\usuario\\Documents\\projects\\food-cli\\src\\data\\categories.json";
    const rawCategories = await (0, json_read_1.JSONRead)({ path });
    const categories = rawCategories.map((category) => new category_1.Category({ name: category.category }, category.id));
    return categories;
}
exports.loadCategories = loadCategories;
