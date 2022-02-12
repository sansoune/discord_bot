const Discord = require('discord.js')

module.exports = (client) => {
    client.on('messageCreate', (message) => {
        const prefix = client.config.prefix
        // if(message.channel.id === client.config.bot_channel && !message.author.bot) bot(client, message)
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.substring(prefix.length + 1).split(/ +/)
        console.log(args)
        const command = client.commands.find(cmd => cmd.name === args[0])
    
        if(!command) return message.reply("this command does not exist")
    
        command.run(message, args, client, Discord)
        
        
    
    })
}