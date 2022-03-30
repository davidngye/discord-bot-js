const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')

module.exports = {
    name: 'say',
    description: 'Has que el bot diga algo!',
    options: [
        {
            name: 'texto',
            description: 'Ponga el texto !',
            type: 3, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: true
        },
    ],
    run: async (client, int) => {

        let texto = int.options.getString("texto");


        if(texto == "@everyone" || texto == "@here"){
            int.reply('No L')
        } else {
            const embed = new MessageEmbed()
            .setTitle(`${texto}`)
    
            int.reply({embeds : [embed]})
        }
    }
}