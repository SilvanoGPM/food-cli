import inquirer from "inquirer";
import chalk from "chalk";

import { Food } from "../model/food";
import { FoodExistsByName } from "../use-cases/food-exists-by-name";
import { GetCategoryById } from "../use-cases/get-category-by-id";
import { GetFoodsByName } from "../use-cases/get-foods-by-name";
import { figlet } from '../services/figlet';

interface Macro {
  quantity: number;
  unit: string;
}

interface FindFoodAnswers {
  name: string;
  food: Food;
  info: string[];
}

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

export class FindFood {
  constructor(
    private getFoods: GetFoodsByName,
    private foodExists: FoodExistsByName,
    private getCategory: GetCategoryById
  ) {}

  private async showPrompt() {
    return inquirer.prompt<FindFoodAnswers>([
      {
        name: "name",
        message: "Qual o nome do alimento?",
        validate: async (name: string) => {
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

  private async shouldContinue() {
    return inquirer.prompt<{ proceed: boolean }>([
      {
        name: 'proceed',
        type: 'confirm',
        message: 'Continuar?',
      }
    ]);
  }

  public async run() {
    while (true) {
      console.clear();

      figlet({
        text: 'Food CLI',
        font: 'Larry 3D',
        format: (text) => chalk.redBright(text),
      });

      const answers = await this.showPrompt();

      const { category } = await this.getCategory.execute(
        answers.food.categoryId
      );

      console.clear();

      console.group(chalk.bgGreen("Informações"));
      console.log(`Identificador: ${chalk.greenBright(answers.food.id)}`);
      console.log(`Nome: ${chalk.greenBright(answers.food.name)}`);
      console.log(`Categoria: ${chalk.greenBright(category.name)}`);
      console.log(
        `Unidade: ${chalk.greenBright(
          `${answers.food.baseQuantity}/${answers.food.baseUnit}`
        )}`
      );

      console.log(
        `Valor energético: ${chalk.greenBright(
          `${answers.food.energy.kcal} kcal`
        )} = ${chalk.greenBright(`${answers.food.energy.kj} kJ`)}`
      );

      for (const info of answers.info) {
        const { name } = macroChoices.find((macro) => macro.value === info);

        const macro: Macro = answers.food[info];

        console.log(
          `${name}: ${chalk.greenBright(`${macro.quantity}/${macro.unit}`)}`
        );
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
