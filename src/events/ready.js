module.exports = (client) => {
    client.on('ready', () => {
        console.log('the bot is working')
    
        const status_array = ["I am your guide to the new world", "just type \"nano help \""]
        let index = 0
        setInterval(() => {
            if(index === status_array.length) index = 0
            const status = status_array[index]
            client.user.setActivity(status)
            client.user.setStatus(status)
            index++
        }, 5000)
    
    })
}