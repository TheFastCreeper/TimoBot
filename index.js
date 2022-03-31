import bot from "./bot.js";
import 'dotenv/config';
import help from './services/helpMenu.js'
import spamMessage from "./services/spamMessage.js";

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));
spamMessage().catch(err => console.log(err));