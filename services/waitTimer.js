
import {randomInt} from "mathjs";

export function randomTimer(func) {
        const randomInt = randomInt(1, 6);
        let randomIntMillis = randomInt * 1000;
        console.log("A random timeout of " + randomInt + " Seconds will occur now!");
        setTimeout(func, randomIntMillis);

}