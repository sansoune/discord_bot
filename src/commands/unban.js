module.exports = {
    name: "unban",
    discription: "unban a user baned",
    async run(message, args, client, Discord) {
            if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("you dont have the permission")
            const banList = await message.guild.bans.fetch()
            const id = args[1].replace(/[<@!>]/g, '')
            console.log('haha'+ banList.map(user => user.id === `${id}` ))
            console.log(banList)
            if(id) {
                message.guild.members.unban(id)
                message.channel.send('user has bean unbanned')
            }else {
                message.channel.send('please specify a user')
            }
            console.log(message.member.permissions.has('ADMINISTRATOR'))
        }    
}