import chalk from 'chalk';

const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;

const sum = num1 + num2;

console.log(chalk.yellow(`${num1} + ${num2} = ${sum}`));