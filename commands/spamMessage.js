import bot from "../bot.js";
import ActivationSchema from "../models/activation.js";
import {randomStringGen} from "../services/randomStringGen.js";
import {randomTimer} from "../services/waitTimer.js"
import {getCurrentTime} from "../services/getCurrentTime.js";


const spamMessage = async () => {

    bot.command('spammessage', async (ctx) => {
        let randomString = randomStringGen();
        let randomStringCmd = "/" + randomString;
        let repeat = true;
        let totalRuntime = 0;
        let currentTime = getCurrentTime();
        

        const activation = new ActivationSchema(
            {
                id: ctx.update.message.from.id,
                first_name: ctx.update.message.from.first_name,
                datetime: currentTime,
                strspm: randomString,
            }
        )
        activation.save().catch(err => console.log(err));

        const spamming = async () => {
            await ctx.reply("Type " + randomStringCmd + " to stop the spamming");
            await bot.hears(randomStringCmd, () => {
                repeat = false;
                ctx.reply("Stopped the spamming");
            });
            if (totalRuntime < 30000) { //limits runtime to x millis
                if (repeat) {
                    let randomTime = randomTimer();
                    totalRuntime = totalRuntime + randomTime;
                    //console.log(randomTime,"\n",totalRuntime);
                    console.log(getCurrentTime());
                    setTimeout(spamming, randomTime);
                }
            } else {
                ctx.reply("Reached maximum runtime!");
            }
        }
        await spamming();

    });
}

export default spamMessage;



