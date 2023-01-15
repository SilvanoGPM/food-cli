import { Category } from "../model/category";
import { Food } from "../model/food";
import { JSONRead } from "../services/io/json-read";

interface RawMacro {
  qty: number;
  unit: string;
}

interface RawFood {
  id: number;
  description: string;
  base_qty: number;
  base_unit: string;
  category_id: number;
  attributes: {
    protein: RawMacro;
    lipid: RawMacro;
    carbohydrate: RawMacro;
    fiber: RawMacro;

    energy: {
      kcal: number;
      kj: number;
    };
  };
}

interface RawCategory {
  id: number;
  category: string;
}

function mapMacro(macro: RawMacro) {
  if (!macro) {
    return { quantity: 0, unit: "g" };
  }

  return { quantity: macro.qty, unit: macro.unit };
}

export async function loadFoods() {
  const path =
    "C:\\Users\\usuario\\Documents\\projects\\food-cli\\src\\data\\food.json";

  const rawFoods = await JSONRead<RawFood[]>({ path });

  const foods = rawFoods.map((food) => {
    return new Food(
      {
        name: food.description,
        baseQuantity: food.base_qty,
        baseUnit: food.base_unit,
        categoryId: food.category_id,
        protein: mapMacro(food.attributes.protein),
        carbohydrate: mapMacro(food.attributes.carbohydrate),
        lipid: mapMacro(food.attributes.lipid),
        fiber: mapMacro(food.attributes.fiber),
        energy: food.attributes.energy,
      },
      food.id
    );
  });

  return foods;
}

export async function loadCategories() {
  const path =
    "C:\\Users\\usuario\\Documents\\projects\\food-cli\\src\\data\\categories.json";

  const rawCategories = await JSONRead<RawCategory[]>({ path });

  const categories = rawCategories.map(
    (category) => new Category({ name: category.category }, category.id)
  );

  return categories;
}
