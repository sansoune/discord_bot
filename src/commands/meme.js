const fs = require('fs')
const path = require('path')
module.exports = {
    name: "meme",
    discription: "send a random meme",
    async run(message, args, client, Discord) {
        try {
            const file_path = path.resolve(__dirname, '..', 'images')
            const files = fs.readdirSync(file_path)
            const file = files[Math.floor(Math.random() * files.length)]

            const attachement = new Discord.MessageAttachment(file_path + '\\' + file)
            console.log(file_path + '\\' + file)
            // const attachement = new Discord.MessageEmbed()
            // attachement.setThumbnail(file_path + '\\' + file)
            await message.channel.send({files: [attachement]})
            console.log(file)
        } catch (error) {
            throw error
        }
        // const files = fs.readdirSync('../images/')
        
    }
}