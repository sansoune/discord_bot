module.exports = {
    name: "ticket",
    discription: "if you want to contact our support",
    async run(message, args, client, Discord) {
        let channel = await message.guild.channels.create(`ticket: ${message.author.tag}`)
        channel.setParent('933781969026834462')
        channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        })
        channel.permissionOverwrites.edit(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        })


        const reactionMessage = await channel.send('thank you for contacting the support')

        try {
            await reactionMessage.react("🔒"),
            await reactionMessage.react("⛔")
        } catch (error) {
            channel.send("error sendind the emoji")
            throw error

        }

        const collector = reactionMessage.createReactionCollector((reaction, user) =>
            message.guild.members.cache.find((member) => member.id === user.id).permissions.has('ADMINISTRATOR'),
            { dispose: true }
        )

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name) {
                case "🔒":
                    channel.permissionOverwrites.edit(message.author, {
                        SEND_MESSAGES: false,
                        
                    })
                    break;
                case "⛔":
                    console.log('hello')
                    channel.send("this channel will be deleted in 10s")
                    setTimeout(() => channel.delete(), 10000)
                    break;
            }
        })
        message.channel.send(`we will be right with you! ${channel} `).then((msg) => {
            setTimeout(() => msg.delete(), 7000)
            setTimeout(() => message.delete(), 3000)
        }).catch(error => {
            throw error
        })
    }
}