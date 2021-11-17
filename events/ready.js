const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const saldırıtokeni = ayarlar.saldırı_tokeni
module.exports = client => {

  
  
    let a = "<!C"
  let b = "odE"
var prefix = ayarlar.prefix;
  let ç = "_HST"
  let l = "k1"
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

  let c = "mingF"

  let bot_join;
  if(saldırıtokeni !== a+b+c+ç+l) bot_join = "reverse"
 else bot_join = "true" 

  if(bot_join !== "true") {
   
   console.error('SİSTEM: ayarlar saldırı tokeni hatalı.')
process.exit(0); 
    
    return
  
  } 

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [

        "Boş Alt Yapı!"
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/rammus53");  //reklam değil xd
        }, 2 * 3000);

  
  
  }
