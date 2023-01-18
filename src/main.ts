#!/usr/bin/env node

import { loadCategories, loadFoods } from "./data";
import { InMemoryCategoryRepository } from "./repositories/category/in-memory-category-repository";
import { InMemoryFoodRepository } from "./repositories/food/in-memory-food-repository";
import { FindFood } from "./screens/find-food";
import { FoodExistsByName } from "./use-cases/food-exists-by-name";
import { GetCategoryById } from "./use-cases/get-category-by-id";
import { GetFoodsByName } from "./use-cases/get-foods-by-name";

async function start() {
  const foodData = await loadFoods();
  const foodRepository = new InMemoryFoodRepository(foodData);

  const getFoodsByName = new GetFoodsByName(foodRepository);
  const foodExistsByName = new FoodExistsByName(foodRepository);

  const categoryData = await loadCategories();
  const categoryRepository = new InMemoryCategoryRepository(categoryData);

  const getCategoryById = new GetCategoryById(categoryRepository);

  const findFood = new FindFood(
    getFoodsByName,
    foodExistsByName,
    getCategoryById
  );

  await findFood.run();
}

start();
