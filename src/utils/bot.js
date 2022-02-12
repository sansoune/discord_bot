const { Configuration, OpenAIApi } = require("openai");

module.exports = async (client, message) => {
    // if(message.channel.id !== client.config.bot_channel) return
    const configuration = new Configuration({
        apiKey: client.config.openai_token,
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion("text-davinci-001", {
        prompt: `respond to the message: ${message}`,
        temperature: 0,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    // console.log()
    message.channel.send(response.data.choices[0].text)
}