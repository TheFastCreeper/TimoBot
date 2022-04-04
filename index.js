import bot from "./bot.js";
import 'dotenv/config';
import help from './services/helpMenu.js'
import spamMessage from "./services/spamMessage.js";
import {randomStringGen} from "./services/randomStringGen.js";
import stopSpammingFunc from "./services/stopCommand.js";
import stopCommand from "./services/stopCommand.js";
import {stopSpamming} from "./services/stopSpamming.js";

export let randomString = randomStringGen();

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));
spamMessage().catch(err => console.log(err));
stopSpammingFunc().catch(err => console.log((err)));
