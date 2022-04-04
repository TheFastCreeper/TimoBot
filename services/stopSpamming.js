import bot from '../bot.js';

export function stopSpamming() {
    bot.telegram.sendMessage('2055340600',"Bot will now stop! Thank you for using this broken mess!")
    bot.stop("Bot was manually interrupted!");
    setTimeout(launchBot,2000);
}
function launchBot () {
    bot.launch().catch(err => console.log(err));

}
