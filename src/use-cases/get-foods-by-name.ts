import { FoodRepository } from '../repositories/food/food-repository';

export class GetFoodsByName {
  constructor(private foodRepository: FoodRepository) {}

  async execute(name: string) {
    const foods = await this.foodRepository.findManyByName(name);

    return { foods };
  }
}
