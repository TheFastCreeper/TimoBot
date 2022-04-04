import {randomInt} from "mathjs";


export function randomTimer(func) {
        const randomIntVar = randomInt(1, 6);
        let randomIntMillis = randomIntVar * 1000;
        console.log("A random timeout of " + randomIntVar + " Seconds will occur now!");
        setTimeout(func, randomIntMillis);

}