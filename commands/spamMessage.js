import bot from "../bot.js";
import {randomStringGen} from "../services/randomStringGen.js";
import { randomTimer } from "../services/waitTimer.js"



const spamMessage = async () => {

    bot.command('spammessage', async (ctx) => {
        let randomString = randomStringGen();
        let randomStringCmd = "/"+randomString;
        let randomTime = randomTimer();
        console.log(randomStringCmd);
        const spamming = setInterval(async () => {
            await bot.telegram.sendMessage(
                '2055340600',
                "Type the command /" + randomString + " to stop the bot!"

            );
            randomTime = randomTimer();
            console.log(randomTime);
            await bot.hears(randomStringCmd, (context) => {
                console.log("Context: "+context.update.message.text)
                if (context.update.message.text.includes(randomString)){
                    clearInterval(spamming);
                    console.log("Includes = true");
                }
                context.replyWithMarkdown("Spamming terminated")
            });

        }, randomTime);

    });
}

export default spamMessage;



