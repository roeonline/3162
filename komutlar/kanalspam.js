const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let fbi = args.slice(0).join(' ');
  
  if(!fbi) return message.channel.send('kanal spam ismi belirt moruq')
  
 await message.react('😈')
  
  for (var i = 0; i < 100; i++) {
  message.guild.createChannel(fbi, {type: "text"})
}
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'kanal-spam',
  description: 'taslak', 
  usage: 'kanal-spam'
};
