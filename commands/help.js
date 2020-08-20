const Command = require('./command')
const Discord = require('discord.js');
const config = require("../config.json");
const prefix = config.BOT_PREFIX;

module.exports = class Help extends Command{
    static match (message){
       
        return message.content.startsWith('?timeo')
        
    }

    static action (message) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#27AC5A')
        .setAuthor('Timeo Help', 'https://i.imgur.com/X8pJwl8.png', 'https://github.com/DiamoonWolf/Timeo')
        .setDescription('If you got an issue with Timeo, you can report it [Here](https://github.com/DiamoonWolf/Timeo/issues)')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '`' + prefix + 'timeo`', value: 'Creates an ephemeral message for [x] seconds.\n Min. seconds: 5.\n Max. seconds: 86400 (1day). \n Usage: `' + prefix + 'timeo <seconds> <message>`\n' },
            { name: '-----------------------------------------------------------------', value: '\u200B' },
            { name: '`' + prefix + 'tnuke`', value: 'Clears an entire text channel in [x] seconds.\n Min. seconds: 1.\n Max. seconds: 86400 (1day). \n Usage: `' + prefix + 'tnuke <seconds>`\n' },
            { name: '-----------------------------------------------------------------', value: '\u200B' },
            { name: '`?timeo`', value: 'Displays this message. \n Usage: `?timeo`\n ' },
            { name: '-----------------------------------------------------------------', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter('Have a nice day !');
    
    message.channel.send(exampleEmbed);
          
    }
}