module.exports = {
    name: "remove",
    discription: "remove a role from a user", 
    async run(message, args, client, Discord) {
        if(!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send("you don't have the permissions to do it")
        const user = message.mentions.users.first()
        const role = message.mentions.roles.first()
        if(!user) return message.channel.send(`please specify a user`)
        if(!role) return message.channel.send("you didn't specify a role")
        const target = message.guild.members.cache.get(user.id)
        console.log(role)
        target.roles.remove(role.name)
        message.channel.send(`I have removed from ${user} the role of ${role.name}`)
    }
}