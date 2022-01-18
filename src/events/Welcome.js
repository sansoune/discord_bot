const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    const channelId = '932352313098657823'
    client.on("guildMemberAdd", (member) => {
        console.log(member)


        const channel = member.guild.channels.cache.get(channelId)
        channel.send('hello')
    })
}
