module.exports = async (client, interaction) => {
    if (interaction.isCommand()){
		const command = client.slashCommands.get(interaction.commandName);
		
		if(!command) return;

		if(!interaction.member.permissions.has(command.permissions || [])) return interaction.reply('No tienes lo suficientes permisos para utilizar este comando')

		command.run(client, interaction)
	}
};