module.exports = (client) => {
    client.on('voiceStateUpdate', (oldState, newState) => {
        if (newState.channel === null && oldState.channel !== null) return;
        const ch_id = newState.channelId
        const ch = client.channels.cache.get(ch_id)
        const parent = ch.parentId
        // console.log(newState.member.user)
        const user = newState.member.user

        if (parent !== '934509666061414410') return;

        const text_channel = client.channels.cache  .find(c => c.name === ch.name)
        // console.log(text_channel)
        text_channel.permissionOverwrites.edit(user, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        })

        
    })
}