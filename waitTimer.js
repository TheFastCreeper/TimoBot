
import {randomInt} from "mathjs";

export function randomTimer() {
    const randomInt2 = randomInt(1,6);
    let randomIntMillis = randomInt2 * 1000;
    console.log("A random timeout of "+randomInt2+" Seconds will occur now!");
    setTimeout(randomTimer, randomIntMillis);
}