import 'dotenv/config'
import express from 'express'

import {Scenes, Telegraf} from "telegraf";

const bot = new Telegraf("5282137833:AAGSUe7pXUd28LeF_Bn6nX3sSFEFrHQHLvk");


bot.start(async (ctx) => {

await ctx.replyWithMarkdown("Hello World! I am a bot :)!");

});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;
export const stage = new Scenes.Stage();

