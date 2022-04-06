import bot from "./bot.js";
import help from './commands/helpMenu.js'
import spamMessage from "./commands/spamMessage.js";
import {randomStringGen} from "./services/randomStringGen.js";

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));
spamMessage();
