const math = require('mathjs');


console.log("Verified that file is indeed loading now")
randomTimer()

function randomTimer() {
    const randomInt2 = math.randomInt(0,6);
    let randomIntMillis = randomInt2 * 1000;
    console.log("A random timeout of "+randomInt2+" Seconds will occur now!");
    setTimeout(randomTimer, randomIntMillis);


}