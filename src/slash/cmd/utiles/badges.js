const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    name: 'badges',
    description: 'Insigneas de una persona',
    options: [
        {
            name: 'user',
            description: 'Ver el avatar tuyo o de otra persona',
            type: 6,
        },
    ],
    run: (client, int) => {
        
        const user = int.options.getUser("user") ?? int.user;

        const flags = user.flags.toArray();

        console.log(flags);
        
        int.reply(`${user}'s badges: ${flags.join(', ')}`)

    }
}