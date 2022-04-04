import bot from "../bot.js";
import {printMessage} from "./printMessage.js";



const spamMessage = async () => {
    bot.command('spamMessage', async (ctx) => {
           await printMessage();
});}

export default spamMessage;



