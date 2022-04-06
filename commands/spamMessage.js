import bot from "../bot.js";
import {randomStringGen} from "../services/randomStringGen.js";
import { randomTimer } from "../services/waitTimer.js"



const spamMessage = async () => {

    bot.command('spammessage', async (ctx) => {
        let randomString = randomStringGen();
        let randomStringCmd = "/"+randomString;
        let randomTime;
        const spamming = setInterval(async () => {
            randomTime = randomTimer();
            await bot.hears(randomStringCmd, (context) => {
                console.log("Context: "+context.update.message.text)
                if (context.update.message.text.includes(randomString)){
                    clearInterval(spamming);
                    console.log("Includes = true");
                }
                context.replyWithMarkdown("Spamming terminated")
            });

            await ctx.replyWithMarkdown(
                "Type the command /" + randomString + " to stop the bot!"
            );
        }, 1000);

    });
}

export default spamMessage;



