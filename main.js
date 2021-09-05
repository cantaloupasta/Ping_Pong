const Discord = require('discord.js');
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
  
client.on('ready', () => {
    console.log('PINGPONGISONLINE');
});
 
 
client.on('message', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
  
});
 
client.login('ODgyMzQ3Mzc4NDkxOTQwOTU0.YS6ECA.EM7hTyq-xvM_LOcKW4tSwJPqFTc');