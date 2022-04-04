import bot from "../bot.js";
import {randomString} from "../index.js";


const spamMessage = async () => {
    bot.command('spamMessage', async (ctx) => {
        const spamming = setInterval(async () => {
            await bot.telegram.sendMessage(
                '897402878',
                "Type the command /" + randomString + " to stop the bot!"
            );
            await bot.hears(/.*/, (context) => {
                console.log(context.update.message.text)
                if (context.update.message.text === "/" + randomString) clearInterval(spamming);
                context.replyWithMarkdown("Spamming terminated")
            });

        }, 500);
    });
}

export default spamMessage;



