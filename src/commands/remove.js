module.exports ={
    name: "remove",
    discription: "remove a channel",
    async run(message, args, client, Discord) {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("you dont have the permissions")

        const channel = message.mentions.channels.first() || message.channel
        channel.delete()
    }
}