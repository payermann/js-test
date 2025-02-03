import { questionInt } from "readline-sync";

export function Number() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Erraten Sie die Zahl zwischen 1 und 100!");

  let attempts = 5;

  while (attempts > 0) {
    const userGuess = questionInt("Ihre Vermutung: ");
    if (userGuess === randomNumber) {
      console.log("Herzlichen Glückwunsch! Sie haben die Zahl erraten.");
      return;
    } else if (userGuess < randomNumber) {
      console.log("Zu niedrig!");
    } else {
      console.log("Zu hoch!");
    }
    attempts--;
    console.log(`Sie haben noch ${attempts} Versuche.`);
  }

  console.log(
    `Leider haben Sie alle Versuche aufgebraucht. Die Zahl war ${randomNumber}.`
  );
}
