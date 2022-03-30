const { MessageEmbed, MessageAttachment } = require('discord.js')
const canvacord = require('canvacord')
const Discord = require('discord.js')

module.exports = {
    name: 'trigger',
    description: 'trigger',
    options: [
        {
            name: 'user',
            description: 'Ver el avatar tuyo o de otra persona',
            type: 6,
        },
    ],
    run: async (client, int) => {
        
        const user = int.options.getUser("user") ?? int.user;

        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return int.reply({ attachment: attachment });

    }
}