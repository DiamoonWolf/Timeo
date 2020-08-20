const Command = require('./command')
const Discord = require('discord.js');
const config = require("../config.json");
const prefix = config.BOT_PREFIX;

module.exports = class Tnuke extends Command{
    static match (message){
       
        return message.content.startsWith(prefix + 'tnuke')
        
    }

    static action (message) {


        //Here you can give the permissions for this command (for example, ADMINISTRATOR or MANAGE_GUILD)
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {

            const errMsg = new Discord.MessageEmbed()
            .setColor('#4A0862')
            .setAuthor('Sorry, you cannot use that command here!', 'https://i.imgur.com/6HKZJYW.png');
            message.channel.send(errMsg);

        } else {
            const nukemsg = new Discord.MessageEmbed()
            .setColor('#FD4718')
            .setTitle(':clock1: Time Nuked.')
            .setImage('https://media.giphy.com/media/rSxGPn046lZGE/giphy.gif')
            .setTimestamp()
            .setFooter('Nuked ');
    
            async function nuked() {
                var message_size = 100;
                while (message_size == 100) {
                    await message.channel.bulkDelete(100)
                .then(messages => message_size = messages.size)
                .catch(console.error);
                }
    
                message.channel.send(nukemsg).then(msg => {
                  
                    msg.delete({ timeout: 60*1000 })
                    
                    
                  })
                  .catch(console.error());
            }
    
    
            let args = message.content.split(' ')
           
    
    
            let msgtime = args[1] * 1000
    
            if (isNaN(args[1])) {
                
                message.delete()
                message.reply(' Syntax is :\n ' + prefix + 'tnuke <seconds>').then(msg => {
                    msg.delete({ timeout: 15 * 1000 })
                    
                  })
                  .catch(console.error());
        
              } else {
                message.delete()
                if (args[1] > 86400) {
                    msgtime = 86400
                }
                if (args[1] < 1) {
                   msgtime = 1
                } 
                  
                console.log('Time nuke in: ' + msgtime)
        
                args.shift()    
    
                setTimeout(nuked, msgtime)
                
              }
        

        }
 
          
    }
}