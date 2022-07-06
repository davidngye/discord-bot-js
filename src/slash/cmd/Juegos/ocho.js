const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')

module.exports = {
    name: 'ocho',
    description: 'Juega ocho',
    run: async (client, int) => {

        client.discordTogether.createTogetherCode(int.member.voice.channel.id, 'ocho').then(async invite => {
            return int.reply(`${invite.code}`);
        });

    }
}