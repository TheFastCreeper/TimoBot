import {Scenes, Telegraf} from "telegraf";

const bot = new Telegraf("5282137833:AAEApny9QopaIqkUbCvWYpV1wyms6e8OqJk");


bot.start(async (ctx) => {

await ctx.replyWithMarkdown("Hello World! I am a bot :)!");

});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;
export const stage = new Scenes.Stage();

