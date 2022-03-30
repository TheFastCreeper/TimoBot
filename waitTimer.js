import 'mathjs'

console.log("Verified that file is indeed loading now")
randomTimer()

function randomTimer() {
    let randomInt = math.random
    let randomInt2 = parseInt(randomInt);
    let randomIntMillis = randomInt2 * 1000;
    console.log("A random timeout of "+randomInt+" Seconds will occur now!");
    setTimeout(randomTimer, randomIntMillis);


}