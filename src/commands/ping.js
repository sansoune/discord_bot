module.exports = {
    name: 'ping',
    run(message) {
        message.reply({content: "pong"})
    }
}