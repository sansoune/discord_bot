module.exports = {
    name: 'kick',
    discription: "this command kick a user",
    async run(message, args) {
        const member = message.mentions.users.first()
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("you dont have the permission")
        
        if(member) {
            const target = message.guild.members.cache.get(member.id)
            target.kick()
            message.channel.send('user has bean kicked')
        }else {
            message.channel.send('please specify a user')
        }
        // console.log(message.member.permissions.has('ADMINISTRATOR'))
    }
}