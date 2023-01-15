"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const base_entity_1 = require("./base-entity");
class Food extends base_entity_1.BaseEntity {
    props;
    constructor(props, id) {
        super(id);
        this.props = props;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get baseQuantity() {
        return this.props.baseQuantity;
    }
    set baseQuantity(baseQuantity) {
        this.props.baseQuantity = baseQuantity;
    }
    get baseUnit() {
        return this.props.baseUnit;
    }
    set baseUnit(baseUnit) {
        this.props.baseUnit = baseUnit;
    }
    get categoryId() {
        return this.props.categoryId;
    }
    set categoryId(categoryId) {
        this.props.categoryId = categoryId;
    }
    get protein() {
        return this.props.protein;
    }
    set protein(protein) {
        this.props.protein = protein;
    }
    get lipid() {
        return this.props.lipid;
    }
    set lipid(lipid) {
        this.props.lipid = lipid;
    }
    get carbohydrate() {
        return this.props.carbohydrate;
    }
    set carbohydrate(carbohydrate) {
        this.props.carbohydrate = carbohydrate;
    }
    get fiber() {
        return this.props.fiber;
    }
    set fiber(fiber) {
        this.props.fiber = fiber;
    }
    get energy() {
        return this.props.energy;
    }
    set energy(energy) {
        this.props.energy = energy;
    }
}
exports.Food = Food;
