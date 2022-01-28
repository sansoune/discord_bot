const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    const channelId = client.config.welcome_ch
    client.on("guildMemberAdd", (member) => {
        console.log(member)
        let role = member.guild.roles.cache.find(role => role.name === "member");
        member.roles.add(role)
        const embed = new MessageEmbed()
        embed.setTitle(`please welcome ${member.user.tag}`)
        embed.setColor('GOLD')
        .setDescription(`${member.user.tag} has joined ${member.guild.name} so welcome him
        type "nano help" to see the bot's command
        `)
        const channel = member.guild.channels.cache.get(channelId)
        channel.send({embeds: [embed]})
    })
}
