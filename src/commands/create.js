module.exports = {
    name: 'create',
    discription: 'create a voice and text room',
    async run(message, args, client, Discord) {
        const category = '934509666061414410'
        const channel = await message.guild.channels.create(`${args[1]}`)
        const channel_voice = await message.guild.channels.create(`${args[1]}`, {type: "GUILD_VOICE"})
        channel.setParent(category)
        channel_voice.setParent(category)
        channel_voice.setUserLimit(args[2])
        console.log(channel_voice.id)
        channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        })
        
        
    }
}