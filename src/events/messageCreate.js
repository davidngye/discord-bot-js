module.exports = async (client, message) => {

	if (message.author.bot) return;

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm') return;

	const prefix = "c/";

	////////////////////////////////////////////////////////////////

	const { MessageEmbed } = require('discord.js');

	const embed = new MessageEmbed()
	.setTitle('Cubo bot mencion !')
	.setDescription(`${message.author} me ha mencionado !`)
	.addFields(
		{name: 'Prefix', value: `Mi prefix es : "${prefix}"`},
		{name: 'Necesitas ayuda ?', value: `Utilize el comando ${prefix}help para obtener ayuda !`}
	)

	if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.reply({ embeds: [embed] , allowedMentions: {repliedUser: false} });

	////////////////////////////////////////////////////////////////

	if (!message.content.startsWith(prefix)) return;
	const commandfile = client.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
	if (commandfile) {
		commandfile.run(client, message, args);
	}

}
