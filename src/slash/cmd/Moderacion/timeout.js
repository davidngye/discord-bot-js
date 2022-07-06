const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'timeout',
    description: 'Comando para jugar a la vieja',
    options: [
        {
            name: 'user',
            description: 'usuario que quieres aislar',
            type: 6, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
        {
            name: 'tiempo',
            description: 'Tiempo del usuario para que este en aislado',
            type: 3, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
        {
            name: 'razon',
            description: 'Razon por la que el miembro va a ser aislado',
            type: 3, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
    ],
    run: async (client, int) => {

        const user = int.options.getUser("user");
        const tiempo = int.options.getString("tiempo");
        const razon = int.options.getString("razon");
        if(user == int.user){

            int.reply('No puedes aislarte a ti mismo')
        }

        const member = int.guild.members.cache.get(user.id)
        
        const timeInMs = ms(tiempo)

        member.timeout(
            timeInMs, razon
        )
        int.reply(`${user} ha sido aislado por ${tiempo}`)

        if(int.member.permissions.has("ADMINISTRATOR")){
            const user = int.options.getUser("user");
            if(user == int.user){
                int.reply('No puedes aislarte a ti mismo')
            }
    
            const member = int.guild.members.cache.get(user.id)
    
            member.kick()
            int.reply(`${user} ha sido expulsado`)
        } else{
            int.reply('Necesitas el permiso `ADMINISTRATOR` para utilizar este comando')
        }

    }
}