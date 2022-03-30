import bot from "./bot.js";
import 'dotenv/config';

bot.launch().catch(err => console.log(err));