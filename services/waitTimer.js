import {randomInt} from "mathjs";


export const randomTimer = (func) => {
    const randomIntVar = randomInt(1000, 6000);
    console.log("A random timeout of " + randomIntVar + " Millis will occur now!");
    setTimeout(func, randomIntVar);

}