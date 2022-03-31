import 'dotenv/config'
import express from 'express'

import {Scenes, Telegraf} from "telegraf";

const bot = new Telegraf("5233272224:AAE9b1l4ojyzoXuioKCWHasNnrLiyAiiz1o");


bot.start(async (ctx) => {

await ctx.replyWithMarkdown("Hello World! I am a bot :)!");

});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;
export const stage = new Scenes.Stage();