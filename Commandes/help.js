const Discord = require("discord.js");
const p = "!"; // |

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // message.channel.bulkDelte();
    message.channel.send({
        embed: {
            color: 0x1991d3,
            title: `Répertoire de toutes les commandes`,
            thumbnail: {
                url: client.user.displayavatarURL
            },
            fields: [{
                    name: `> :diving_mask: **${p}help**`,
                    value: "-    Affiche toutes les commandes dispobible."
                },
                {
                    name: `> :red_circle: **${p}mtm / ${p}nla**`,
                    value: "-    Essaye. :)"
                },
                {
                    name: `> :desktop: **${p}ping**`,
                    value: "-    Affiche le temps de réponse entre le bot et le serveur."
                },
                {
                    name: `> :bar_chart: **${p}stats [Utilisateur]**`,
                    value: "-    Informations de l'utilisateur mentionné ou de l'utilisateur qui effectue la commande."
                },
                {
                    name: `> :pencil: **${p}clear [Nombre de message]**`,
                    value: "-    Efface le nombre de message."
                },
                {
                    name: `> :arrow_up: **${p}dev [Utilisateur] / ${p}testeur [Utilisateur]**`,
                    value: "-    Donne un rôle défini - Uniquement disponible sur le server officiel"
                },
                {
                    name: `> :arrow_down: **${p}deldev [Utilisateur] / ${p}deltest [Utilisateur]**`,
                    value: "-    Enlève un rôle défini - Uniquement disponible sur le server officiel"
                },
                {
                    name: `> :nerd: **${p}neko / ${p}nekolewd**`,
                    value: "-    Affiche une image neko -> salon NSFW requis."
                },
                {
                    name: `> :foot_tone2: **${p}kick [Utilisateur]**`,
                    value: "-    Kick l'utilisateur mentionné."
                },
                {
                    name: `> :hammer: **${p}ban [Utilisateur]**`,
                    value: "-    Ban l'utilisateur mentionné."
                }
            ],

            footer: {
                text: `Répertoire de toutes les commandes`
            }
        }

    });


};

module.exports.help = {
    name: "help"
}