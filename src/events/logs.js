const { MessageEmbed } = require("discord.js")

module.exports = (client) => {

    client.on('channelCreate', channel => {
        log_msg(client, channel.guild.id, "GREEN", "channel created", `A new channel was created \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('channelDelete', channel => {
        log_msg(client, channel.guild.id, "RED", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('guildMemberAdd', member => {
        log_msg(client, member.guild.id, "YELLOW", "nw user joined", `a new user was joined the server \n\n ${member.user.tag}`)
    })
    client.on('guildMemberRemove', member => {
        log_msg(client, member.guild.id, "YELLOW", "a user left", `${member.user.tag} has quit the server`)
    })
    client.on('roleDelete', role => {
        log_msg(client, role.guild.id, "BLUE", "role deleted", `${role.name}`)
    })
    client.on('roleCreate', role => {
        log_msg(client, role.guild.id, "BLUE", "role created", `${role}`)
    })
    client.on('roleUpdate', role => {
        log_msg(client, role.guild.id, "BLUE", "role updated", `${role}`)
    })
    client.on('guildBanAdd', member => {
        log_msg(client, member.guild.id, "PURPLE", "a member was banned", `${member.user.tag} was banned`)
    })
    client.on('guildBanRemove', member => {
        log_msg(client, member.guild.id, "PURPLE", "a member was debanned", `${member.user.tag} was de banned`)
    })

    const log_msg = async (client, guildid, color, title, discription) => {
        try {
            const embed = new MessageEmbed()
            embed.setColor(color)
            .setDescription(discription ? discription.substr(0, 2048) : "\u200b")
            .setTitle(title ? title.substr(0, 256) : "\u200b")
            .setTimestamp()
            .setFooter({text: "nano logs system"})

            const channel = await client.channels.cache.get(client.config.logs_ch)
            channel.send({embeds: [embed]})
        } catch (error) {
            throw err
        }
    }
}