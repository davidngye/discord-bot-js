const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Message } = require('discord.js');
const r = require('randomstring')

module.exports = {
    name: 'nitro',
    description: 'Genera 5 Codigos de nitro de nitro (Unchecked)',
    run: (client, int) => {

        for(let i = 0; i<5; i++){
            let str = r.generate(16)

            const embed = new MessageEmbed()
            .setTitle('Discord Nitro | Unchecked')
            .setDescription(`\`\`\`https://discord.gift/${str}\`\`\``)

            int.member.send({ embeds: [embed] })
        }

        const embed2 = new MessageEmbed()
        .setTitle('Discord Nitro | Unchecked')
        .setDescription(`Verify your MD`)
        int.reply({ embeds: [embed2] })
    }
}