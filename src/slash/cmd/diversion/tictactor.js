const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Util } = require('discord.js')
const TicTacTor = require("discord-tictactoe")
const tic = new TicTacTor({ language: "en", commandOptionName:"jugador2" })


module.exports = {
    name: 'tictactor',
    description: 'Comando para jugar a la vieja',
    options: [
        {
            name: 'jugador2',
            description: 'oponente',
            type: 6, //3 = TEXTO | 4 = NUMERO | 5 = TRUE FALSE | 6 = USUARIO | 7 =  CANALES DE TEXTO  | 8 = ROLES
            required: false
        },
    ],
    run: async (client, int) => {

        tic.handleInteraction(int)

    }
}