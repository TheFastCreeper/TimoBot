import bot from "./bot.js";
import help from './commands/helpMenu.js'
import spamMessage from "./commands/spamMessage.js";
import mongoConnection from "./services/mongoConnection.js";
import list from "./commands/listActivations.js";
import dropactivationsdb from "./commands/dropActivationsDB.js";


mongoConnection();

bot.launch().catch(err => console.log(err));
help().catch(err => console.log(err));
spamMessage().catch(err => console.log(err));
list().catch(err => console.log(err));
dropactivationsdb().catch((err => console.log(err)));


