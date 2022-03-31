import bot from "../bot.js";
import { randomTimer } from './waitTimer.js'

const spamMessage = async () => {
    bot.command('spamMessage', async (ctx) => {


            await ctx.replyWithMarkdown(
                "Hey, wake up!"
            );

    });
}

export default spamMessage;