module.exports = {
    name: "bring",
    discription: "bing a user where you are",
    async run(message, args, client, Discord){
        const member = message.member
        const channel = member.voice.channel
        const target = message.mentions.members.first()
        // console.log(member)
        // const channel = member.voice.channel
        console.log(channel)
        if(channel === null) return message.reply("you need to be in a voice channel")
        if(!target) return message.reply("please specify a user")
        target.voice.setChannel(channel.id)
        
    }
}