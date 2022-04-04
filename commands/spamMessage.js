import bot from "../bot.js";
import {printMessage} from "../services/printMessage.js";



const spamMessage = async () => {
    bot.command('spamMessage', async (ctx) => {
           await printMessage();
});}

export default spamMessage;



