const Discord = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()


const Welcome = require('./events/Welcome')

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
})




client.on('ready', () => {
    console.log('the bot is working')

    Welcome(client)
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({content: "pong"})
    }
})





client.login(process.env.TOKEN)