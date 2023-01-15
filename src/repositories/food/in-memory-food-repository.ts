import { FoodRepository } from "./food-repository";
import { Food } from "../../model/food";

export class InMemoryFoodRepository implements FoodRepository {
  private _data: Food[];

  constructor(data: Food[]) {
    this._data = data;
  }

  public async findById(id: number) {
    const food = this._data.find((food) => food.id === id);

    if (!food) {
      return null;
    }

    return food;
  }

  public async findByName(name: string) {
    const food = this._data.find((food) =>
      food.name.toLocaleLowerCase().includes(name.toLowerCase())
    );

    if (!food) {
      return null;
    }

    return food;
  }

  public async findManyByName(name: string) {
    const foods = this._data.filter((food) =>
      food.name.toLocaleLowerCase().includes(name.toLowerCase())
    );

    return foods;
  }

  public async existsByName(name: string): Promise<boolean> {
    return this._data.some((food) =>
      food.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
  }
}
