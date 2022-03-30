import bot from "./bot.js";
import 'dotenv/config';
import help from './services/helpMenu.js'

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));