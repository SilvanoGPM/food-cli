"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryById = void 0;
class GetCategoryById {
    categoryRepository;
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(id) {
        const category = await this.categoryRepository.findById(id);
        return { category };
    }
}
exports.GetCategoryById = GetCategoryById;
