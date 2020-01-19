const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");

module.exports.run = async(client, message, args) => {


    if (!message.member.voiceChannel) return message.channel.send('Connectez-vous à un salon vocal !');

    const permissions = message.member.voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT')) {
        return message.channel.send('Je n\'ai pas la permission de venir dans ton channel :/');
    }

    if (!permissions.has('SPEAK')) {
        s
        return message.channel.send('Je n\'ai pas la permission de parler dans ton channel :/');
    }

    if (!message.member.voiceChannel.join()) {
        message.channel.send("Je n'ai pas pu rejoindre votre channel vocal.");
    }







};

module.exports.help = {
    name: "join"
}