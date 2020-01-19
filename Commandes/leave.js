const Discord = require("discord.js");
module.exports.run = async => {
    voiceChannel.leave();
    message.channel.send("J'ai quitté votre channel vocal.")
};

module.exports.help = {
    name: "leave"
}