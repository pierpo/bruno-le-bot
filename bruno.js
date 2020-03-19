const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['fr'] });
// Adds the utterances and intents for the NLP
manager.addDocument('fr', 'je peux te prendre une ambrée', 'serve.beer');
manager.addDocument('fr', 'une petite ambrée', 'serve.beer');
manager.addDocument('fr', 'je veux bien une ambrée', 'serve.beer');
manager.addDocument('fr', 'une ambrée stp', 'serve.beer');
manager.addDocument('fr', 'une ambrée', 'serve.beer');

// Train also the NLG
manager.addAnswer('fr', 'serve.beer', 'En voilà une !');
manager.addAnswer('fr', 'serve.beer', 'Voilà pour toi !');
manager.addAnswer('fr', 'serve.beer', 'Tiens, santé !');

const normalizeString = str =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const isBeingPinged = message => {
  botId = client.user.id;
  return message.mentions.users.get(botId);
};

(async () => {
  await manager.train();
  manager.save();
  // const response = await manager.process('en', 'I should go now');
  // console.log(response);

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
    // console.log('parsedMessage: ', parsedMessage);
    const leMess = await manager.process('fr', parsedMessage);
    console.log('leMess: ', leMess);
    message.channel.send(leMess.answer);
  });

  client.login(config.token);
})();
