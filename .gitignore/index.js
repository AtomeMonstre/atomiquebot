const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('volcania.bedrock.fr : 19132');
  }
});

client.login('NDI5NDYyMTIyMTc1NjYwMDMy.DaB_ug.v4qKk-Jmi__mHjPjq1ImaCnZjOE');
