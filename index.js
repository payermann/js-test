import { question, questionInt, keyInSelect } from "readline-sync";
import { greet } from "./greets.js";

const name = question("What is your name? ");
const age = questionInt("What is your age? ");

const cars = ["Toyota", "Chevrolet", "Ford", "Nissan", "Honda"];
const car = keyInSelect(cars, "What is your favorite car?");

greet(name, age, cars[car]);
