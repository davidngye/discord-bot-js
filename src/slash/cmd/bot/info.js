const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Informacion del bot',
    run: (client, int) => {

        const embed = new MessageEmbed()
        .setTitle("Informacion del bot")
        .setDescription("Bot para que el creador aprenda discord.js y algo de mongoDB XD\n\nBot creado por Dievid#0519\n\nCodigo : [Click Me](https://github.com/davidngye/discord.js-bot)")
        int.reply({ embeds: [embed]})

    }
}