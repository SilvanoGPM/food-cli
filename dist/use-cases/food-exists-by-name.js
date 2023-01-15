"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodExistsByName = void 0;
class FoodExistsByName {
    foodRepository;
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    async execute(name) {
        const exists = await this.foodRepository.existsByName(name);
        return { exists };
    }
}
exports.FoodExistsByName = FoodExistsByName;
