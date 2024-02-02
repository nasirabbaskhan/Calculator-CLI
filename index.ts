#! /usr/bin/env node
import inquirer from "inquirer";
import { sum, subtract, multiplication } from "./function.js";
import { power, division, modulus } from "./function.js";
import showBanner from "node-banner";
import gradient from "gradient-string";

(async () => {
  await showBanner(
    "Calculator",
    "This perform Add, Subtract, Multiplication, Division, Modulus and Power operation",
    "red",
    "blue"
  );
})();

async function fun() {
  let loop = true;
  while (loop) {
    const answers = await inquirer.prompt([
      {
        type: "number",
        name: "firstnumber",
        message: gradient.rainbow("Enter first number :"),
        validate: (input: number) => {
          if (input) {
            return true;
          } else {
            return gradient.rainbow("please enter number :");
          }
        },
      },
      {
        type: "number",
        name: "secondnumber",
        message: gradient.rainbow("Enter second number:"),
        validate: (input: number) => {
          if (input) {
            return true;
          } else {
            return gradient.rainbow("please enter number :");
          }
        },
      },
      {
        type: "list",
        name: "operator",
        choices: [
          "Sum",
          "Subtract",
          "Mutiplication",
          "Division",
          "Modulus",
          "Power",
        ],
        message: gradient.rainbow("Enter your operator:"),
      },
    ]);
    const { firstnumber, secondnumber, operator } = answers;

    if (operator === "Sum") {
      console.log(
        gradient.fruit("The sum of two numbers ="),
        sum(firstnumber, secondnumber)
      );
    } else if (operator === "Subtract") {
      console.log(
        gradient.fruit("The difference of two numbers ="),
        subtract(firstnumber, secondnumber)
      );
    } else if (operator === "Mutiplication") {
      console.log(
        gradient.fruit("The mutiplication of two numbers ="),
        multiplication(firstnumber, secondnumber)
      );
    } else if (operator === "Division") {
      console.log(
        gradient.fruit("The division of two numbers ="),
        division(firstnumber, secondnumber)
      );
    } else if (operator === "Modulus") {
      console.log(
        gradient.fruit("The modulus of two numbers ="),
        modulus(firstnumber, secondnumber)
      );
    } else if (operator === "Power") {
      console.log(
        gradient.fruit("The power of two numbers ="),
        power(firstnumber, secondnumber)
      );
    }

    // prompt from user to ask calculate again or not
    let answer = await inquirer.prompt([
      {
        type: "confirm",
        name: "again",
        message: gradient.rainbow("Do you want calculation again?"),
      },
    ]);
    loop = answer.again;
  }
  console.log(gradient.rainbow("Thank You for Using Our Calculator: "));
}

setTimeout(() => {
  fun();
}, 1000);
