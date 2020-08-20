const Command = require('./command')
const config = require("../config.json");
const prefix = config.BOT_PREFIX;
module.exports = class Timeo extends Command{
    static match (message){
       
        return message.content.startsWith(prefix + 'timeo')
        
    }

    static action (message) {


        let args = message.content.split(' ')
       


        let msgtime = args[1] * 1000

        if (isNaN(args[1])) {
            
            message.delete()
            message.reply(' Syntax is :\n ' + prefix + 'timeo <seconds> <message>').then(msg => {
                msg.delete({ timeout: 15 * 1000 })
                
              })
              .catch(console.error());
    
          } else {
            message.delete()
            if (args[1] > 86400) {
                msgtime = 86400
            }
            if (args[1] < 3) {
               msgtime = 3
            } 
              
    
            let tmsg = args.join(' ')
      
            console.log('Timeo message: ' + tmsg + ' & Time: ' + msgtime)
    
            args.shift()
            args.shift()
            tmsg = args.join(' ')
    
    
            message.channel.send("<@" + message.author.id + "> : \n" + tmsg)
            .then(msg => {
                msg.delete({ timeout: msgtime })
              })
              .catch(console.error());


          }
       

       
           
    }
}