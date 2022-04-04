import bot from '../bot.js';
import {randomString} from '../index.js';
import {stopSpamming} from "./stopSpamming.js";
import {random} from "mathjs";


export const printMessage = () => {

    bot.telegram.sendMessage('2055340600', "Type the command /" + randomString + " to stop the bot!");
    if (bot.command(randomString, (ctx) => {
        ctx.replyWithMarkdown("Heard string");
    })) {
    } else {
        setTimeout(printMessage, 500)
    }


}
