import { BaseEntity } from './base-entity';

interface CategoryProps {
  name: string;
}

export class Category extends BaseEntity {
  private props: CategoryProps;

  constructor(props: CategoryProps, id: number) {
    super(id);
    this.props = props;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }
}
