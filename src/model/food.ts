import { BaseEntity } from './base-entity';

interface Macro {
  quantity: number;
  unit: string;
}

interface Energy {
  kcal: number;
  kj: number;
}

interface FoodProps {
  name: string;
  baseQuantity: number;
  baseUnit: string;
  categoryId: number;
  protein: Macro;
  carbohydrate: Macro;
  lipid: Macro;
  fiber: Macro;
  energy: Energy
}

export class Food extends BaseEntity {
  private props: FoodProps;

  constructor(props: FoodProps, id: number) {
    super(id);
    this.props = props;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get baseQuantity() {
    return this.props.baseQuantity;
  }

  public set baseQuantity(baseQuantity: number) {
    this.props.baseQuantity = baseQuantity;
  }

  public get baseUnit() {
    return this.props.baseUnit;
  }

  public set baseUnit(baseUnit: string) {
    this.props.baseUnit = baseUnit;
  }

  public get categoryId() {
    return this.props.categoryId;
  }

  public set categoryId(categoryId: number) {
    this.props.categoryId = categoryId;
  }

  public get protein() {
    return this.props.protein;
  }

  public set protein(protein: Macro) {
    this.props.protein = protein;
  }

  public get lipid() {
    return this.props.lipid;
  }

  public set lipid(lipid: Macro) {
    this.props.lipid = lipid;
  }

  public get carbohydrate() {
    return this.props.carbohydrate;
  }

  public set carbohydrate(carbohydrate: Macro) {
    this.props.carbohydrate = carbohydrate;
  }

  public get fiber() {
    return this.props.fiber;
  }

  public set fiber(fiber: Macro) {
    this.props.fiber = fiber;
  }

  public get energy() {
    return this.props.energy;
  }

  public set energy(energy: Energy) {
    this.props.energy = energy;
  }
}
