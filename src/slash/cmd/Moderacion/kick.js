const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'Comando para jugar a la vieja',
    options: [
        {
            name: 'user',
            description: 'usuario que quieres aislar',
            type: 6, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
    ],
    run: async (client, int) => {

        if(int.member.permissions.has("KICK_MEMBERS")){
            const user = int.options.getUser("user");
            if(user == int.user){
                int.reply('No puedes aislarte a ti mismo')
            }
    
            const member = int.guild.members.cache.get(user.id)
    
            member.kick()
            int.reply(`${user} ha sido expulsado`)
        } else{
            int.reply('Necesitas el permiso `KICK_MEMBERS` para utilizar este comando')
        }

    }
}