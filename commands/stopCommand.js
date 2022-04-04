import bot from "../bot.js";
import { randomString } from '../index.js'
import {stopSpamming} from "../services/stopSpamming.js";

const stopSpammingFunc = async () => {
    bot.command(randomString, async (ctx) => {
        stopSpamming();

    });
}

export default stopSpammingFunc;



