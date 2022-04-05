import bot from '../bot.js';

export const stopSpamming = () => {
    bot.telegram.sendMessage('2055340600', "Bot will now stop! Thank you for using this")
    bot.stop("Bot was manually interrupted!");
    setTimeout(launchBot, 2000);
}
const launchBot = () => {
    bot.launch().catch(err => console.log(err));

}
