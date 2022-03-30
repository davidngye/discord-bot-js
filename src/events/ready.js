module.exports = async (client, message) => {
    const slashcommands = client.slashCommands.map(x => x)
    client.application.commands.set(slashcommands)

    console.log(`[BOT] Logged in as ${client.user.username}#${client.user.discriminator}.`);
};