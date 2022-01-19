const Discord = require('discord.js')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const AsciiTable = require('ascii-table')
dotenv.config()




const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.commands = new Discord.Collection()


//npm rebuild node-sass
const command_table = new AsciiTable('commands')
command_table.setHeading("name", "satus")

fs.readdirSync(path.resolve(__dirname, 'commands/')).filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./commands/${file}`)
    // console.log(`command ${command.name} has bean loaded `)
    command_table.addRow(`${command.name}`, 'loded')
    client.commands.set(command.name, command)
})
console.log(command_table.toString())

fs.readdirSync(path.resolve(__dirname, 'events/')).filter(file => file.endsWith('.js')).forEach(file => {
    const event = require(`./events/${file}`)(client)
})



client.on('ready', () => {
    console.log('the bot is working')

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