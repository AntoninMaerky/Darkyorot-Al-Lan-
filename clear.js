const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.channel.bulkDelete(1);

    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions !").catch(console.error);

    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'ai pas la permission`).catch(console.error);

    if (!args[0]) return message.channel.send("Vous devez spécifié un nombre de message à supprimer !");

    if (isNaN(args[0])) return message.channel.send("Veuillez spécifié un nombre !");

    message.channel.bulkDelete(args[0]);
};

module.exports.help = {
    name: "clear"
}