const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const AsciiTable = require('ascii-table')




const client = new Discord.Client({
    intents: 32767
})
    
client.config = require('./config.json')
client.commands = new Discord.Collection()


//npm rebuild node-sass
const command_table = new AsciiTable('commands')
command_table.setHeading("name", "satus")


//loading the commands
fs.readdirSync(path.resolve(__dirname, 'commands/')).filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./commands/${file}`)
    // console.log(`command ${command.name} has bean loaded `)
    command_table.addRow(`${command.name}`, '✅')
    client.commands.set(command.name, command)
})

//consoling the status of the command
console.log(command_table.toString())

//loading the events 
fs.readdirSync(path.resolve(__dirname, 'events/')).filter(file => file.endsWith('.js')).forEach(file => {
    const event = require(`./events/${file}`)(client)
})

client.login(client.config.token)