import {Scenes, Telegraf} from "telegraf";
import UserSchema from "./models/user.js";
import mongoose from "mongoose";

const bot = new Telegraf("5282137833:AAE2ol6_eYQdQGNRfK1Wj8eYeV3cWptL-eY");


bot.start(async (ctx) => {

    const user = new UserSchema(ctx.update.message.from);
    user.save().catch(err => console.log(err));

await ctx.replyWithMarkdown("Hello World! I am a bot :)!");

});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;
export const stage = new Scenes.Stage();

