module.exports = {
    name: "unban",
    discription: "unban a user baned",
    async run(message, args, client, Discord) {
            const member = message.mentions.users.first()
            if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("you dont have the permission")
            const banList = await message.guild.bans.fetch()
            console.log('haha'+ banList.find(user => user.id === member))
            if(member) {
                const target = message.guild.members.cache.get(member.id)
                target.unban()
                message.channel.send('user has bean unbanned')
            }else {
                message.channel.send('please specify a user')
            }
            console.log(message.member.permissions.has('ADMINISTRATOR'))
        }    
}