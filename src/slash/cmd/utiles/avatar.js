const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Ver el avatar de alguien',
    options: [
        {
            name: 'user',
            description: 'Ver el avatar tuyo o de otra persona',
            type: 6,
        },
    ],
    run: (client, int) => {

        const user = int.options.getUser("user") ?? int.user;

        const embed = new MessageEmbed()
        .setDescription(user.username + `\n\n[.webp](${user.avatarURL({ size: 1024, format: "webp" })}) | [.jpg](${user.avatarURL({ size: 1024, format: "jpg" })}) | [.png](${user.avatarURL({ size: 1024, format: "png" })})`)
        .setImage(user.avatarURL({ size: 1024, dynamic: true }))

        int.reply({embeds: [embed] })

    }
}