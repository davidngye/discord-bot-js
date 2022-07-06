const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')


module.exports = {
    name: 'chess',
    description: 'Juega ajedrez',
    run: async (client, int) => {

        client.discordTogether.createTogetherCode(int.member.voice.channel.id, 'chess').then(async invite => {
            return int.reply(`${invite.code}`);
        });

    }
}