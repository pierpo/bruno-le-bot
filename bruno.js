const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const normalizeString = str =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const isBeingPinged = message => {
  botId = client.user.id;
  return message.mentions.users.get(botId);
};

client.on('ready', () => {
  console.log(
    `Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`,
  );
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on('message', async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  if (!isBeingPinged(message)) return;

  const messageWithoutMention = message.content.match(/^<@!\d+>(.*)$/)[1];
  const parsedMessage = normalizeString(messageWithoutMention.toLowerCase());

  // Let's go with a few common example commands! Feel free to delete or change those.
  console.log('parsedMessage: ', parsedMessage);
});

client.login(config.token);
