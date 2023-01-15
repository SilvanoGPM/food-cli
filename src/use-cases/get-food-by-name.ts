import { FoodRepository } from '../repositories/food/food-repository';

export class GetFoodByName {
  constructor(private foodRepository: FoodRepository) {}

  async execute(name: string) {
    const food = await this.foodRepository.findByName(name);

    return { food };
  }
}
