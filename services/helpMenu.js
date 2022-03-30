import bot from "../bot.js";

const help = async () => {
    bot.command('help', async (ctx) => {
        await ctx.replyWithMarkdown(
            "there is nobody to help you...."
        );
    });
}

export default help;