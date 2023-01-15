"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const in_memory_category_repository_1 = require("./repositories/category/in-memory-category-repository");
const in_memory_food_repository_1 = require("./repositories/food/in-memory-food-repository");
const find_food_1 = require("./screens/find-food");
const food_exists_by_name_1 = require("./use-cases/food-exists-by-name");
const get_category_by_id_1 = require("./use-cases/get-category-by-id");
const get_foods_by_name_1 = require("./use-cases/get-foods-by-name");
async function start() {
    const foodData = await (0, data_1.loadFoods)();
    const foodRepository = new in_memory_food_repository_1.InMemoryFoodRepository(foodData);
    const getFoodsByName = new get_foods_by_name_1.GetFoodsByName(foodRepository);
    const foodExistsByName = new food_exists_by_name_1.FoodExistsByName(foodRepository);
    const categoryData = await (0, data_1.loadCategories)();
    const categoryRepository = new in_memory_category_repository_1.InMemoryCategoryRepository(categoryData);
    const getCategoryById = new get_category_by_id_1.GetCategoryById(categoryRepository);
    const findFood = new find_food_1.FindFood(getFoodsByName, foodExistsByName, getCategoryById);
    await findFood.run();
}
start();
