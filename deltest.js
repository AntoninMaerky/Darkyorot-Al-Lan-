const Disocrd = require("discord.js");

module.exports.run = async(client, message, args) => {
    // message.channel.bulkDelete();
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Vous n'avez pas la permission.`);
    }


    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Je n'ai pas les permissions.`);
    }

    // let membre = message.guild.member(message.author);
    let membre = message.mentions.members.first() || message.member;

    let role = message.guild.roles.find(x => x.name === "Testeur");

    membre.removeRole(role).catch(console.error);
    message.channel.send(`${membre} n'as plus le rôle ${role.name}.`);
};

module.exports.help = {
    name: "deltest"
}