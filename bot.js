const { SlashCreator, GatewayServer } = require('slash-create'); // Who would remove this?
const Discord = require('discord.js'); // For bots but better.
const client = new Discord.Client(); // Do not forget the client of the bot.
const path = require('path'); // For registering commands under /commands
const creator = new SlashCreator({ // Config stuff.
  applicationID: '12345678901234567', // Client ID from discord.com/developers
  publicKey: 'CLIENT_PUBLIC_KEY', // App key from discord.com/developers
  token: 'BOT_TOKEN_HERE', // Token from discord.com/developers
});

creator
  .withServer( // Gateway Server Stuff. Do not remove...
    new GatewayServer(
      (handler) => client.ws.on('INTERACTION_CREATE', handler)
    )
  )
  .registerCommandsIn(path.join(__dirname, 'commands')) // Registers commands in the /commands folder.
  .syncCommands(); // Sync commands.

client.login('BOT_TOKEN_HERE'); // What bot works without it?