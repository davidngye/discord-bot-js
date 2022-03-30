const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    name: 'uptime',
    description: 'Tiempo prendido del bot',
    run: (client, int) => {

        const seconds = Math.floor(int.client.uptime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        const embed = new MessageEmbed()
        .setTitle('Uptime !')
        .setDescription(`\`\`\`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.\`\`\``)
        int.reply({embeds: [embed]})

    }
}