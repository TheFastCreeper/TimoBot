import {randomInt} from "mathjs";


export const randomTimer = () => {
    const randomIntVar = randomInt(1000,5000);
    console.log("A random timeout of " + randomIntVar + " Millis will occur now!");
    return (randomIntVar);
}