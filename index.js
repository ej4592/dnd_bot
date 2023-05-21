
// const dotenv = require('dotenv').config();

// const { Client, GatewayIntentBits } = require('discord.js');
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages
//   ]
// });

// client.login(process.env.BOT_TOKEN);


// client.on("ready", () => {
//   console.log("Bot is ready")
// })


// client.on("message", msg => {
//   if (msg.content === "hey") {
//     msg.reply("hi there")
//   }
// })

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

