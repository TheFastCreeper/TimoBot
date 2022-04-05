import {randomInt} from "mathjs";

export const randomTimer = (func) => {
    const randomIntVar = randomInt(200, 1000);
    console.log("A random timeout of " + randomIntVar + " Millis will occur now!");
    setTimeout(func, randomIntVar);
}