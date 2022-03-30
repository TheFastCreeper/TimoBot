import 'dotenv/config'
//import express from 'express'

import {Scenes, Telegraf} from "telegraf";

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY);


bot.start(async (ctx) => {

await ctx.replyWithMarkdown("Hello World! I am a bot :)!");

});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;
export const stage = new Scenes.Stage();