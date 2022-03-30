const { MessageEmbed, MessageAttachment, MessageActionRow, MessageSelectMenu } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Mira todos los comandos del bot',
    run: async (client, int) => {

        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		const filter = (interaction) => 
			interaction.isSelectMenu() &&
			interaction.user.id === interaction.user.id;

		const collector = int.channel.createMessageComponentCollector({ 
			filter, 
			max: '2' 
		})

		collector.on('collect', async (collected) => {
			const value = collected.values[0];
			console.log(value);

			collected.reply({ content: value })

		})


		await int.reply({ content: 'Pong!', components: [row] });

    }
}