import { Category } from '../../model/category';

export abstract class CategoryRepository {
  abstract findById(id: number): Promise<Category |null>;
}
