const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    // message.channel.bulkDelete();
    let début = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now() - début} ms`))
};


module.exports.help = {
    name: "ping"
}