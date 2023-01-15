import { Food } from '../../model/food';

export abstract class FoodRepository {
  abstract findById(id: number): Promise<Food | null>;
  abstract findByName(name: string): Promise<Food | null>;
  abstract findManyByName(name: string): Promise<Food[]>;
  abstract existsByName(name: string): Promise<boolean>;
}
