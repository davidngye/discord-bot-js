const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require('discord.js');
const r = require('randomstring')

module.exports = {
    name: 'steam',
    description: 'Genera la 5 gift cards de steam (Unchecked)',
    run: (client, int) => {

        for(let i = 0; i<2; i++){
            let str = r.generate(5)

            let st = r.generate(5)

            let s = r.generate(5)

            let string = r.generate(5)
            int.member.send(`\`\`\`Steam\n\n${str}-${s}-${st}-${string}\`\`\``)
        }

        for(let i = 0; i<5; i++){
            let str = r.generate(5)

            let st = r.generate(5)

            let s = r.generate(5)

            let string = r.generate(5)

            const embed = new MessageEmbed()
            .setTitle('Steam Gift Cards | Unchecked')
            .setDescription(`\`\`\`${str}-${s}-${st}-${string}\`\`\``)

            int.member.send({ embeds: [embed] })
        }

        for(let i = 0; i<5; i++){
            let str = r.generate(5)

            let st = r.generate(5)

            let s = r.generate(5)

            const embed = new MessageEmbed()
            .setTitle('Steam Gift Cards | Unchecked')
            .setDescription(`\`\`\`${str}-${st}-${s}\`\`\``)

            int.member.send({ embeds: [embed] })
        }

        const embed2 = new MessageEmbed()
        .setTitle('Google Play Gift Card | Unchecked')
        .setDescription(`Verify your MD`)
        int.reply({ embeds: [embed2] })

    }
}