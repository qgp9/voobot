/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');
const config = require('./config.json');
const prefix = config.prefix;
const token = process.env.DISCORD_TOKEN;

// Create an instance of a Discord client
const client = new Discord.Client();

function pre(text) { return prefix + text; }
// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {

  //if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.author.bot) return;
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
  if (message.content === pre('ping')) {
    message.reply('pongpong');
  }
 if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }
 if (message.content.startsWith("좋아")) {
    message.channel.send("나도 좋아");
  }
});

// Log our bot in
client.login(token);

// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

