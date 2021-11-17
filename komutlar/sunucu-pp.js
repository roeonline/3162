const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let CodEming = args.slice(0).join(' ');
  
  if(!CodEming) return message.channel.send('Sunucu resmi belirt moruq')
  
  
  message.guild.setIcon(CodEming)
  message.react('😈')
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'sunucu-pp',
  description: 'taslak', 
  usage: 'sunucu-pp'
};
