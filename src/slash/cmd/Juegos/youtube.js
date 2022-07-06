const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')


module.exports = {
    name: 'youtube',
    description: 'Mira videos en youtube',
    run: async (client, int) => {

        client.discordTogether.createTogetherCode(int.member.voice.channel.id, 'youtube').then(async invite => {
            return int.reply(`${invite.code}`);
        });

    }
}