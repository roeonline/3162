const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require('jimp');
const db = require('quick.db');
const Canvas = require('canvas')
const ms = require('parse-ms')
const moment = require('moment');
const saldırıtokeni = ayarlar.saldırı_tokeni
require('./util/eventLoader')(client);

///////////
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200)
  //response.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://boşyapı.glitch.me/`);
}, 10000);
///////////

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
  } else {
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
  }










////////////////////////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);