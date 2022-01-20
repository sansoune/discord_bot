module.exports = {
    name: 'ping',
    discription: "this command ping the bot",
    run(message) {
        message.reply({content: "pong"})
    }
}