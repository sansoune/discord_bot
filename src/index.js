const Discord = require('discord.js')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
dotenv.config()


const Welcome = require('./events/Welcome')

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.commands = new Discord.Collection()


//npm rebuild node-sass

fs.readdirSync(path.resolve(__dirname, 'commands/')).filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./commands/${file}`)
    console.log(`command ${command.name} has bean loaded `)
    client.commands.set(command.name, command)
})



client.on('ready', () => {
    console.log('the bot is working')

    Welcome(client)
})

client.on('messageCreate', (message) => {
    const prefix = 'nano'
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.substring(prefix.length + 1).split(/ +/)
    console.log(args)
    const command = client.commands.find(cmd => cmd.name === args[0])

    if(!command) return message.reply("this command does not exist")

    command.run(message, args, client)
        
})





client.login(process.env.TOKEN)