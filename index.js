import { question, questionInt, keyInSelect } from "readline-sync";
import { greet } from "./greets.js";
import { Number } from "./number.js";

const name = question("Wie ist Ihr Name? ");
const age = questionInt("Wie alt sind Sie? ");

const cars = ["Toyota", "Chevrolet", "Ford", "Nissan", "Honda"];
const car = keyInSelect(cars, "Was ist Ihr Lieblingsauto?");

greet(name, age, cars[car]);

Number();
