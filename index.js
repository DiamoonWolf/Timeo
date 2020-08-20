const Discord = require('discord.js');
const { Console } = require('console');

const config = require("./config.json");
const prefix = config.BOT_PREFIX;
const Ping = require('./commands/ping');
const Timeo = require('./commands/timeo');
const Tnuke = require('./commands/tnuke');
const Help = require('./commands/help');

const bot = new Discord.Client();

bot.on('ready', function() {

    console.log('[ ] Bot is ready.')
    
});


bot.on('message', function(message) {



    let commandUsed = 
        Ping.parse(message) ||
        Timeo.parse(message) ||
        Help.parse(message) ||
        Tnuke.parse(message) 


})



// Put your token in the config.json file --
bot.login(config.BOT_TOKEN).catch(console.error);
// --