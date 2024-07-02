#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("\n\tWelcome to the word count program!\t\n"));
console.log("=".repeat(60));
const answers = await inquirer.prompt([
    {
        type: "sentence",
        name: "input",
        message: "Enter your sentence to count the words:",
    }
]);
//const words = answers.Sentence.trim().split(" ");
let words = answers.input.trim().split(' ');
console.log(words);
console.log(`your words lenth is ${words.length}`);
