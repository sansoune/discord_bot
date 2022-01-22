module.exports = {
    name: "help",
    discription: 'this command show other commands',
    run(message, args, client, Discord) {
        const embeed = new Discord.MessageEmbed()
        embeed.setTitle("my commands").setColor('#f1c40f')
        client.commands.forEach(cmd => {
            // console.log(cmd.name)
            embeed.addField(cmd.name, cmd.discription)
        });

        message.channel.send({embeds: [embeed]})
    }
}