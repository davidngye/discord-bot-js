module.exports = async (client, interaction) => {
    if (interaction.isCommand()){
		const command = client.slashCommands.get(interaction.commandName);
		if(!command) return;
		command.run(client, interaction)
	}
};