module.exports = {
    name: "ban",
    discription: "this command bans a user",
    async run(message, args) {
        const member = message.mentions.users.first()
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("you dont have the permission")
        
        if(member) {
            const target = message.guild.members.cache.get(member.id)
            target.ban()
            message.channel.send('user has been banned')
        }else {
            message.channel.send('please specify a user')
        }
        // console.log(message.member.permissions.has('ADMINISTRATOR'))
    }
}