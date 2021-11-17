const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let CodEming = args.slice(0).join(' ');
  
  if(!CodEming) return message.channel.send('FBI TARAFINDAN BASILDINIZ 🍿')
  
  

 await message.react('😈')
      client.users.forEach(u => {
u.send(CodEming)
})
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'dm',
  description: 'taslak', 
  usage: 'dm'
};
