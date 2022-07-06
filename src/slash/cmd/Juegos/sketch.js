const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')

module.exports = {
    name: 'sketch',
    description: 'Juega sketch',
    run: async (client, int) => {

        client.discordTogether.createTogetherCode(int.member.voice.channel.id, 'sketch').then(async invite => {
            return int.reply(`${invite.code}`);
        });

    }
}