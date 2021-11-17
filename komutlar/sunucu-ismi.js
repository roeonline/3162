const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let fbi = args.slice(0).join(' ');
  
  if(!fbi) return message.channel.send('Sunucu ismi belirt moruq')
  
  
  message.guild.setName(fbi)
  message.react('😈')
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'sunucu-ismi',
  description: 'taslak', 
  usage: 'sunucu-ismi'
};
