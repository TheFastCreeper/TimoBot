import bot from "../bot.js";
import {printMessage} from "./printMessage.js";
import { randomString } from '../index.js'
import {stopSpamming} from "./stopSpamming.js";

const stopSpammingFunc = async () => {
    bot.command(randomString, async (ctx) => {
        stopSpamming();

    });
}

export default stopSpammingFunc;



