const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Ping',
    run: (client, int) => {

    const embed = new MessageEmbed()
    .setTitle('Pong !')
    .setDescription(`${client.ws.ping}ms`)
    int.reply({embeds: [embed]})

    }
}