const { get } = require("https");

module.exports.run = async(client, message, args) => {

    if (!message.channel.nsfw) {
        return message.channel.send("Vous devez être dans un salon NSFW.")
    }

    get("https://neko-love.xyz/api/v1/nekolewd", (res) => {
        const { statusCode } = res;
        if (statusCode !== 200) {
            return message.channel.send("Une erreur est survenue avec l'API.");
        }

        res.setEncoding("utf8");
        let rawData = "";

        res.on("data", chunk => {
            rawData += chunk;
        });

        res.on("end", () => {
            try {
                const parseData = JSON.parse(rawData);

                message.channel.send({
                    embed: {
                        image: {
                            url: parseData.url
                        },
                        footer: {
                            text: `${client.username}`
                        }
                    }
                });
            } catch (error) {
                console.error(error.message);
            }
        });
    }).on("error", (error) => {
        console.error(error.message);
    });

};

module.exports.help = {
    name: "nekolewd"
};