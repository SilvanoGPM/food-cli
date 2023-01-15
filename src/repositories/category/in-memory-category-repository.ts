import { Category } from '../../model/category';
import { CategoryRepository } from './category-repository';

export class InMemoryCategoryRepository implements CategoryRepository {
  private _data: Category[];

  constructor(data: Category[]) {
    this._data = data;
  }

  public async findById(id: number){
    return this._data.find((category) => category.id === id);
  }
}
