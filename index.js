import bot from "./bot.js";
import 'dotenv/config';
import help from './commands/helpMenu.js'
import spamMessage from "./commands/spamMessage.js";
import {randomStringGen} from "./services/randomStringGen.js";
import stopSpammingFunc from "./commands/stopCommand.js";
import stopCommand from "./commands/stopCommand.js";
import {stopSpamming} from "./services/stopSpamming.js";

export let randomString = randomStringGen();

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));
spamMessage().catch(err => console.log(err));
stopSpammingFunc().catch(err => console.log((err)));
