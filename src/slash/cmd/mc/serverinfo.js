const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')
const util = require('minecraft-server-util');

module.exports = {
    name: 'serverinfo',
    description: 'Minecraft Java Server info command!',
    options: [
        {
            name: 'ip',
            description: 'Ip del servidor',
            type: 3, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
    ],
    run: async (client, int) => {

        let ip = int.options.getString("ip");

        const options = {
            enableSRV: true // SRV record lookup
        };
        
        // The port and options arguments are optional, the
        // port will default to 25565 and the options will
        // use the default options.
        util.status(ip, 25565, options).then((result) => {
            console.log(result)

            const embed = new MessageEmbed()
            .setTitle('Info del servidor con la ip ' + ip)
            .addFields(
                {
                    name: 'Version :', value: result.version.name
                },
                {
                    name: 'Jugadores :', value: `${result.players.online}/${result.players.max}`
                },
                {
                    name: 'Motd :', 
                    value: `
                        \`\`\`Raw : ${result.motd.raw}\`\`\`
                        \`\`\`Clean : ${result.motd.clean}\`\`\`
                        \`\`\`HTML : ${result.motd.html}\`\`\`
                    `
                }
            )
            int.reply({embeds:[embed]})

        }).catch((error) => console.error(error));
        
    }
}