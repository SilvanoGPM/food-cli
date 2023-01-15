import { FoodRepository } from '../repositories/food/food-repository';

export class FoodExistsByName {
  constructor(private foodRepository: FoodRepository) {}

  public async execute(name: string) {
    const exists = await this.foodRepository.existsByName(name);

    return { exists };
  }
}
