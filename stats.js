const Discord = require("discord.js");
const moment = require("moment");


module.exports.run = async(client, message, args) => {
        moment.locale('fr');
        const membre = message.mentions.members.first() || message.member;
        // if(!membre) return message.channel.send("Veuillez mentionner un utilisateur !");
        // message.channel.bulkDelete();
        message.channel.send({
                    embed: {
                        color: 0x1991d3,
                        title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
                        thumbnail: {
                            url: membre.user.displayavatarURL
                        },
                        fields: [{
                                    name: "> ID : ",
                                    value: membre.id
                                },
                                {
                                    name: "> Créé le : ",
                                    value: moment.utc(membre.user.createdAt).format("LLLL")
                                },
                                {
                                    name: "> Jeu : ",
                                    value: `${membre.user.presence.game ? `${membre.user.presence.game}` : 'Aucun jeu'}`
                                },
                                {
                                    name: "> Rejoins le :",
                                    value:  moment.utc(membre.joinedAt).format("LLLL")
                                 }],

                                footer: 
                                {
                                text: `Informations de l'utilisateur ${membre.user.username}`
                                }
                            }
    })
}

module.exports.help = {
    name: "stats"
}