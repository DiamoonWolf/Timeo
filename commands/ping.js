const Command = require('./command')
const config = require("../config.json");
const prefix = config.BOT_PREFIX;

module.exports = class Ping extends Command{
    static match (message){
       
        return message.content.startsWith(prefix + 'ping')
        
    }

    static action (message) {
        message.reply('Pong. ~Timeo')  
          
    }
}