"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const base_entity_1 = require("./base-entity");
class Category extends base_entity_1.BaseEntity {
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
}
exports.Category = Category;
