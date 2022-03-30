require('dotenv').config()
const fs = require('fs');
const ClientManager = require('./src/ClientManager');
const client = new ClientManager({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: 32767,
  disableMentions: 'everyone',
});
const Discord = require('discord.js')

client.setup();

const mongoose = require('mongoose');
const path = require('path');
mongoose.connect(process.env.MONGODB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Se ha conectado a la database');
}).catch((err) => {
  console.log('Hubo un error ' + err)
})

client.slashCommands = new Discord.Collection();

const slashCommands = fs.readdirSync(path.join(__dirname, 'src/slash/cmd'));
for(const folders of slashCommands) {
  const folder = fs.readdirSync(path.join(__dirname, 'src/slash/cmd', folders));
  for(const file of folder) {
    const cmd = require(path.join(__dirname, 'src/slash/cmd', folders, file))
    client.slashCommands.set(cmd.name, cmd)
  }
}

// Command handler by Dascruft