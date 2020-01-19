const Discord = require("discord.js");
const prefix = "!"; // | -> Changer aussi le préfix dans la commande help.js ainsi que dans ready.js

module.exports = async(client, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if (!cmd) return;

    cmd.run(client, message, args);
};