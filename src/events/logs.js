const { MessageEmbed } = require("discord.js")

module.exports = (client) => {

    client.on('channelCreate', channel => {
        log_msg(client, channel.guild.id, "GREEN", "channel created", `A new channel was created \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('channelDelete', channel => {
        log_msg(client, channel.guild.id, "RED", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('guildMemberAdd', channel => {
        log_msg(client, channel.guild.id, "YELLOW", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('guildMemberRemove', channel => {
        log_msg(client, channel.guild.id, "BLUE", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('roleDelete', channel => {
        log_msg(client, channel.guild.id, "BLUE", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('roleCreate', channel => {
        log_msg(client, channel.guild.id, "BLUE", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('roleUpdate', channel => {
        log_msg(client, channel.guild.id, "BLUE", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('guildBanAdd', channel => {
        log_msg(client, channel.guild.id, "BLUE", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
    })
    client.on('guildBanRemove', channel => {
        log_msg(client, channel.guild.id, "BLUE", "channel deleted", `A new channel was deleted \n\n \n channel name: ${channel.name} \n\n channel id: ${channel.id} \n\n channel type: ${channel.type}`)
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