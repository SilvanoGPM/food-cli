import { CategoryRepository } from '../repositories/category/category-repository';

export class GetCategoryById {
  constructor(private categoryRepository: CategoryRepository) {}

  public async execute(id: number) {
    const category = await this.categoryRepository.findById(id);

    return { category };
  }
}
