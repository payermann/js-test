import { question } from "readline-sync";

const name = question("What is your name? ");
const age = question("What is your age? ");

console.log(`Hello ${name}!`);
console.log(`You are ${age} years old.`);
