export class BaseEntity {
  protected _id: number;

  constructor(id: number) {
    this._id = id
  }

  public get id() {
    return this._id;
  }
}
