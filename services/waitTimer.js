import {randomInt} from "mathjs";


export const randomTimer = () => {
    const randomIntVar = randomInt(1000,5000);
    return (randomIntVar);
}