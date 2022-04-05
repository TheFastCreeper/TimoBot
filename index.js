import bot from "./bot.js";

import help from './commands/helpMenu.js'
import spamMessage from "./commands/spamMessage.js";
import {randomStringGen} from "./services/randomStringGen.js";


export let randomString = randomStringGen();

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));
spamMessage().catch(err => console.log(err));

