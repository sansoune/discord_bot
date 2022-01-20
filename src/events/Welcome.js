const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    const channelId = '932352313098657823'
    client.on("guildMemberAdd", (member) => {
        console.log(member)
        let role = member.guild.roles.cache.find(role => role.name === "member");
        member.roles.add(role)

        const channel = member.guild.channels.cache.get(channelId)
        channel.send('hello')
    })
}
