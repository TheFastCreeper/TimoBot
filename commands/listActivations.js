import bot from "../bot.js";
import ActivationSchema from "../models/activation.js";

const list = async () => {
    bot.command('list', async (ctx) => {
        await ctx.replyWithMarkdown(
            "Here are all recent activations of TIMOSPABOT :"
        );
        const activationList = await ActivationSchema.find();
        if (activationList.length < 1)
        {
            ctx.reply("The command was never used or the database was recently cleared!")
        }
        if (activationList.length > 0) {
            for (let i = 0; i < activationList.length;i++) {
                 let usedAt = JSON.stringify(activationList[i].datetime);
                 let user = JSON.stringify(activationList[i].first_name);
                 ctx.reply(user+" used the command at "+usedAt);

            }


        }






    });
}

export default list;