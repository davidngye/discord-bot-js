const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require('discord.js');
const r = require('randomstring')

module.exports = {
    name: 'google-play',
    description: 'Genera la 5 gift cards de google-play (Unchecked)',
    run: (client, int) => {

        for(let i = 0; i<5; i++){
            let str = r.generate(4)

            let st = r.generate(4)

            let s = r.generate(4)

            let string =r.generate(4)

            const embed = new MessageEmbed()
            .setTitle('Discord Nitro | Unchecked')
            .setDescription(`\`\`\`${str}-${s}-${st}-${string}\`\`\``)

            int.member.send({ embeds: [embed] })
        }

        const embed2 = new MessageEmbed()
        .setTitle('Google Play Gift Card | Unchecked')
        .setDescription(`Verify your MD`)
        int.reply({ embeds: [embed2] })

    }
}