import { question, questionInt, keyInSelect } from "readline-sync";

const name = question("What is your name? ");
const age = questionInt("What is your age? ");

const cars = ["Toyota", "Chevrolet", "Ford", "Nissan", "Honda"];
const car = keyInSelect(cars, "What is your favorite car?");

console.log(`Hello ${name}!`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite car is ${cars[car]}.`);
