"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFoodsByName = void 0;
class GetFoodsByName {
    foodRepository;
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    async execute(name) {
        const foods = await this.foodRepository.findManyByName(name);
        return { foods };
    }
}
exports.GetFoodsByName = GetFoodsByName;
