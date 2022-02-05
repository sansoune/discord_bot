const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const AsciiTable = require('ascii-table')




const client = new Discord.Client({
    intents: 32767
    // [
        //     Discord.Intents.FLAGS.GUILDS,
        //     Discord.Intents.FLAGS.GUILD_MESSAGES,
        //     Discord.Intents.FLAGS.GUILD_MEMBERS,
        // ]
    })
    
client.config = require('./config.json')
client.commands = new Discord.Collection()


//npm rebuild node-sass
const command_table = new AsciiTable('commands')
command_table.setHeading("name", "satus")

fs.readdirSync(path.resolve(__dirname, 'commands/')).filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./commands/${file}`)
    // console.log(`command ${command.name} has bean loaded `)
    command_table.addRow(`${command.name}`, '✅')
    client.commands.set(command.name, command)
})
console.log(command_table.toString())

fs.readdirSync(path.resolve(__dirname, 'events/')).filter(file => file.endsWith('.js')).forEach(file => {
    const event = require(`./events/${file}`)(client)
})



client.on('ready', () => {
    console.log('the bot is working')

    const status_array = ["I am your guide to the new world", "just type \"nano help \""]
    let index = 0
    setInterval(() => {
        if(index === status_array.length) index = 0
        const status = status_array[index]
        client.user.setActivity(status)
        client.user.setStatus(status)
        index++
    }, 5000)

})

client.on('messageCreate', (message) => {
    const prefix = client.config.prefix
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.substring(prefix.length + 1).split(/ +/)
    console.log(args)
    const command = client.commands.find(cmd => cmd.name === args[0])

    if(!command) return message.reply("this command does not exist")

    command.run(message, args, client, Discord)
    
    // message.guild.bans.fetch()
    // message.channel.send({ })

})






client.login(client.config.token)