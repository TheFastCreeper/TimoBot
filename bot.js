import {Scenes, Telegraf} from "telegraf";

const bot = new Telegraf("5282137833:AAE2ol6_eYQdQGNRfK1Wj8eYeV3cWptL-eY");


bot.start(async (ctx) => {

await ctx.replyWithMarkdown("Hello World! I am a bot :)!");

});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;
export const stage = new Scenes.Stage();

