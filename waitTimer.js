import { randomInt } from 'mathjs'

console.log("Verified that file is indeed loading now")
randomTimer()

function randomTimer() {
    let randomInt = randomInt();
    let randomInt2 = parseInt(randomInt);
    let randomIntMillis = randomInt * 1000;
    console.log("A random timeout of "+randomInt+" Seconds will occur now!");
    setTimeout(randomTimer, randomIntMillis);


}