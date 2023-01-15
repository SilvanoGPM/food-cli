"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFoodByName = void 0;
class GetFoodByName {
    foodRepository;
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    async execute(name) {
        const food = await this.foodRepository.findByName(name);
        return { food };
    }
}
exports.GetFoodByName = GetFoodByName;
