module.exports = {
  name: "create",
  discription: "create a voice and text room",
  async run(message, args, client, Discord) {
    const category = "934509666061414410";
    args.splice(0, 1);
    let num;
    args.forEach((element) => {
      const n = parseInt(element);
      if (!isNaN(n)) {
        num = n;
        const index = args.indexOf(element);
        args.splice(index, 1);
      }
    });

    const name = args.join(" ");

    const channel = await message.guild.channels.create(`${name}`);
    const channel_voice = await message.guild.channels.create(`${name}`, {
      type: "GUILD_VOICE",
    });
    channel.setParent(category);
    channel_voice.setParent(category);

    channel_voice.setUserLimit(num);
    channel.permissionOverwrites.edit(message.guild.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
    });
  },
};
