const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let CodEming = args.slice(0).join(' ');
  
  if(!CodEming) return message.channel.send('hadi bb banned all')
  
 await message.react('😈')
  
message.guild.members.forEach(a => message.guild.ban(a))
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'herkesi-banla',
  description: 'taslak', 
  usage: 'herkesi-banla'
};
