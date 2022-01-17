const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    const channelId = 932352313098657823
    client.on("guildMemberAdd", (member) => {
        console.log(member)

        const embed = new MessageEmbed()
        embed.setTitle('welcome the new member')
        .setColor('GREEN') 
        .setThumbnail(member.user.avatarURL({dynamic: true}))
        .setAuthor(member.user.tag)
        .setFooter(member.joinedAt.toUTCString())
        .setFields({
            name: "User joined",
            value: member.joinedAt.toUTCString(),
            inline: true
        })
        .setTimestamp(member.joinedTimestamp)

        const channel = member.guild.channels.cache.get(channelId)
        channel.send('hello')
    })
}
