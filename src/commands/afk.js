module.exports = {
    name: "afk",
    discription: "move someone to afk channel",
    async run(message, args, client, Discord) {
        const user = message.mentions.members.first()
        if (!user) return message.channel.Send('please specify a user')
        user.voice.setChannel('934576117501800519')
    }
}