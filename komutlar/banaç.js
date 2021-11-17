const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let CodEming = args.slice(0).join(' ');
  
  if(!CodEming) return message.channel.send('q')
  
  

 await message.react('😈')
    message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
      });
    });
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'ban-aç',
  description: 'taslak', 
  usage: 'ban-aç'
};
