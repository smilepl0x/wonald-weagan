const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./auth.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  } else if (message.content === '^owo') {
      message.reply('owo mistew gowbechov, teaw down dis wowl!');
  } else if (message.content.startsWith('^owoize')) {
      var user = message.mentions.users.first();
      if (user.lastMessage != null) {
        var lastusermsg = user.lastMessage.content;
        var l_owoize = lastusermsg.replace(/l/g, 'w')
        var final_owoize = l_owoize.replace(/r/g, 'w')
        message.reply('<@' + user.id + '>\n' + final_owoize);
        console.log('owo\'d ' + user.username);
      } else {
          message.reply('<@' + user.id + '>\nuwu nothing here to uwu')
      }
  }
});

client.login(token.token);
