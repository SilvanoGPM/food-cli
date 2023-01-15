"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFood = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const macroChoices = [
    {
        name: "Proteínas",
        value: "protein",
        checked: true,
    },
    {
        name: "Carboidratos",
        value: "carbohydrate",
        checked: true,
    },
    {
        name: "Lipídios (Gorduras)",
        value: "lipid",
        checked: true,
    },
    {
        name: "Fibras",
        value: "fiber",
    },
];
class FindFood {
    getFoods;
    foodExists;
    getCategory;
    constructor(getFoods, foodExists, getCategory) {
        this.getFoods = getFoods;
        this.foodExists = foodExists;
        this.getCategory = getCategory;
    }
    async showPrompt() {
        return inquirer_1.default.prompt([
            {
                name: "name",
                message: "Qual o nome do alimento?",
                validate: async (name) => {
                    const { exists } = await this.foodExists.execute(name);
                    return exists || "Não possuímos dados sobre este alimento";
                },
            },
            {
                name: "food",
                type: "list",
                message: "Escolha o alimento exato",
                choices: async (answers) => {
                    const { foods } = await this.getFoods.execute(answers.name);
                    const choices = foods.map((food) => ({
                        name: food.name,
                        value: food,
                    }));
                    return choices;
                },
            },
            {
                type: "checkbox",
                name: "info",
                choices: macroChoices,
                message({ food }) {
                    return `Quais informações você deseja conhecer sobre o alimento ${food.name}?`;
                },
            },
        ]);
    }
    async shouldContinue() {
        return inquirer_1.default.prompt([
            {
                name: 'proceed',
                type: 'confirm',
                message: 'Continuar?',
            }
        ]);
    }
    async run() {
        while (true) {
            console.clear();
            const answers = await this.showPrompt();
            const { category } = await this.getCategory.execute(answers.food.categoryId);
            console.clear();
            console.group(chalk_1.default.bgGreen("Informações"));
            console.log(`Identificador: ${chalk_1.default.greenBright(answers.food.id)}`);
            console.log(`Nome: ${chalk_1.default.greenBright(answers.food.name)}`);
            console.log(`Categoria: ${chalk_1.default.greenBright(category.name)}`);
            console.log(`Unidade: ${chalk_1.default.greenBright(`${answers.food.baseQuantity}/${answers.food.baseUnit}`)}`);
            console.log(`Valor energético: ${chalk_1.default.greenBright(`${answers.food.energy.kcal} kcal`)} = ${chalk_1.default.greenBright(`${answers.food.energy.kj} kJ`)}`);
            for (const info of answers.info) {
                const { name } = macroChoices.find((macro) => macro.value === info);
                const macro = answers.food[info];
                console.log(`${name}: ${chalk_1.default.greenBright(`${macro.quantity}/${macro.unit}`)}`);
            }
            console.log();
            console.groupEnd();
            const { proceed } = await this.shouldContinue();
            if (!proceed) {
                return;
            }
        }
    }
}
exports.FindFood = FindFood;
