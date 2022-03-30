const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Comando para jugar a la vieja',
    options: [
        {
            name: 'user',
            description: 'usuario que quieres aislar',
            type: 6, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
        {
            name: 'razon',
            description: 'Razon por la que el miembro va a ser aislado',
            type: 3, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: false
        },
    ],
    run: async (client, int) => {

        const user = int.options.getUser("user");
        const razon = int.options.getString("razon") || "No hay razon";
        if(user == int.user){
            int.reply('No puedes aislarte a ti mismo')
        }

        const member = int.guild.members.cache.get(user.id)

        member.ban({ reason:razon })
        int.reply(`${user} ha sido baneado por`)

    }
}