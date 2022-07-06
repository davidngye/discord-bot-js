const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')

module.exports = {
    name: 'poker',
    description: 'Juega poker',
    run: async (client, int) => {

        client.discordTogether.createTogetherCode(int.member.voice.channel.id, 'poker').then(async invite => {
            return int.reply(`${invite.code}`);
        });

    }
}