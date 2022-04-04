import bot from '../bot.js';
import {randomString} from '../index.js';




export function printMessage(imp) {

      bot.telegram.sendMessage('2055340600', "Type the command /" + randomString + " to stop the bot!");
      setTimeout(printMessage, 10000);

}
