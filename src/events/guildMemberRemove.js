module.exports = async (client, member) => {
    let canal = member.guild.channels.cache.get('944998645118431343');
    const { MessageEmbed } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle('Un miembro se ha ido del servidor.')
    .setDescription(`\`\`\`${member} Se ha ido del servidor !\n\nAhora somos : ${client.guilds.cache.size}\`\`\``)
    canal.send({ embeds: [embed] })
}