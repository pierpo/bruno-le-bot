const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['fr'] });

manager.addNamedEntityText('cocktail', 'cdecale', ['fr'], ["C'Décalé"]);
manager.addNamedEntityText('cocktail', 'mojito', ['fr'], ['mojito']);

manager.addNamedEntityText('beer', 'ambree', ['fr'], ['ambrée']);
manager.addNamedEntityText('beer', 'blonde', ['fr'], ['blonde']);
manager.addNamedEntityText('beer', 'rousse', ['fr'], ['rousse']);
manager.addNamedEntityText('beer', 'blanche', ['fr'], ['blanche']);
manager.addNamedEntityText('beer', 'brune', ['fr'], ['brune']);
manager.addNamedEntityText('beer', 'juda', ['fr'], ['Juda']);
manager.addNamedEntityText('beer', 'pinte', ['fr'], ['pinte']);
manager.addNamedEntityText('beer', 'ipa', ['fr'], ['ipa']);

manager.addNamedEntityText(
  'food',
  'pastaCarbo',
  ['fr'],
  ['pâtes à la carbonara', 'pâtes carbo'],
);
manager.addNamedEntityText('food', 'burrata', ['fr'], ['burrata']);
manager.addNamedEntityText(
  'food',
  'planche',
  ['fr'],
  ['planche', 'planche mixte', 'planche charcut', 'planche charcuterie'],
);

// demande de biere
manager.addDocument('fr', 'tu me sers une %beer%', 'serve.beer');
manager.addDocument('fr', 'je peux te prendre une %beer%', 'serve.beer');
manager.addDocument('fr', 'une petite %beer%', 'serve.beer');
manager.addDocument('fr', 'je veux bien une %beer%', 'serve.beer');
manager.addDocument('fr', 'une %beer% stp', 'serve.beer');
manager.addDocument('fr', 'une %beer%', 'serve.beer');

manager.addAnswer('fr', 'serve.beer', 'En voilà une ! :beer:');
manager.addAnswer('fr', 'serve.beer', 'En voilà une pour toi ! :beer:');
manager.addAnswer('fr', 'serve.beer', 'Voilà pour toi ! :beer:');
manager.addAnswer('fr', 'serve.beer', 'Tiens, santé ! :beer:');

// demande de cocktail
manager.addDocument('fr', 'tu me sers un %cocktail%', 'serve.cocktail');
manager.addDocument('fr', 'je peux te prendre un %cocktail%', 'serve.cocktail');
manager.addDocument('fr', 'un petit %cocktail%', 'serve.cocktail');
manager.addDocument('fr', 'je veux bien un %cocktail%', 'serve.cocktail');
manager.addDocument('fr', 'un %cocktail% stp', 'serve.cocktail');
manager.addDocument('fr', 'un %cocktail%', 'serve.cocktail');

manager.addAnswer('fr', 'serve.cocktail', 'En voilà un ! :cocktail:');
manager.addAnswer('fr', 'serve.cocktail', 'En voilà un pour toi ! :cocktail:');
manager.addAnswer('fr', 'serve.cocktail', "C'est parti ! :cocktail:");
manager.addAnswer('fr', 'serve.cocktail', 'Voilà pour toi ! :cocktail:');
manager.addAnswer('fr', 'serve.cocktail', 'Tiens, santé ! :cocktail:');

// demande de food
manager.addDocument('fr', 'tu me prépares des %food%', 'serve.food');
manager.addDocument('fr', 'tu me prépares un %food%', 'serve.food');
manager.addDocument('fr', 'tu me prépares une %food%', 'serve.food');
manager.addDocument('fr', 'je peux te prendre des %food%', 'serve.food');
manager.addDocument('fr', 'je peux te prendre un %food%', 'serve.food');
manager.addDocument('fr', 'je peux te prendre une %food%', 'serve.food');
manager.addDocument('fr', 'des %food%', 'serve.food');
manager.addDocument('fr', 'un %food%', 'serve.food');
manager.addDocument('fr', 'une %food%', 'serve.food');
manager.addDocument('fr', 'je veux bien des %food%', 'serve.food');
manager.addDocument('fr', 'je veux bien un %food%', 'serve.food');
manager.addDocument('fr', 'je veux bien une %food%', 'serve.food');

manager.addAnswer('fr', 'serve.food', 'Et voilà :spaghetti:');
manager.addAnswer('fr', 'serve.food', 'Bon appétit :wink:');
manager.addAnswer('fr', 'serve.food', 'Tiens ! Tu veux autre chose ? :wink:');

// tu as quoi
manager.addDocument('fr', 'tu as quoi ?', 'what.do.you.serve');
manager.addDocument('fr', 'tu as quoi à manger?', 'what.do.you.serve.food');
manager.addDocument('fr', 'tu sers quoi ?', 'what.do.you.serve');
manager.addDocument('fr', 'tu sers quoi ? à manger?', 'what.do.you.serve.food');
manager.addDocument('fr', "qu'est-ce que t'as ?", 'what.do.you.serve');
manager.addDocument(
  'fr',
  "qu'est-ce que tu sers à manger?",
  'what.do.you.serve.food',
);
manager.addDocument('fr', "qu'est-ce que tu sers ?", 'what.do.you.serve');
manager.addDocument(
  'fr',
  "qu'est-ce que tu sers à manger?",
  'what.do.you.serve.food',
);

manager.addAnswer(
  'fr',
  'what.do.you.serve',
  "Ce soir j'ai juda, blanche, blonde, IPA, mojito, C'Décalé...",
);

manager.addAnswer(
  'fr',
  'what.do.you.serve',
  "Si tu veux je te sers une juda, blanche, blonde, IPA, mojito, C'Décalé...",
);

manager.addAnswer(
  'fr',
  'what.do.you.serve.food',
  'Si tu veux je te sers une burrata ou des pâtes carbonara...',
);

// salut
manager.addDocument('fr', 'salut', 'greetings.hello');
manager.addDocument('fr', 'hello', 'greetings.hello');
manager.addDocument('fr', 'bonsoir', 'greetings.hello');
manager.addDocument('fr', 'bonjour', 'greetings.hello');
manager.addDocument('fr', 'yo', 'greetings.hello');

manager.addAnswer('fr', 'greetings.hello', 'Salut ! :wave:');
manager.addAnswer('fr', 'greetings.hello', 'Bien le bonsoir ! :wave:');
manager.addAnswer('fr', 'greetings.hello', 'Salut ça va ? :wave:');
manager.addAnswer(
  'fr',
  'greetings.hello',
  'La forme ? Je te sers quoi ? :wave:',
);

// ca va
manager.addDocument('fr', 'ça va ?', 'greetings.how.is.it.going');
manager.addDocument('fr', 'ça roule ?', 'greetings.how.is.it.going');
manager.addDocument('fr', 'tu vas bien ?', 'greetings.how.is.it.going');
manager.addDocument('fr', 'comment tu vas ?', 'greetings.how.is.it.going');
manager.addDocument('fr', 'comment tu vas ?', 'greetings.how.is.it.going');

manager.addAnswer(
  'fr',
  'greetings.how.is.it.going',
  "Ca roule et toi ? Qu'est-ce que je te sers ?",
);
manager.addAnswer(
  'fr',
  'greetings.how.is.it.going',
  'Bien bien, les affaires reprennent ! Tu veux un truc à boire ?',
);
manager.addAnswer(
  'fr',
  'greetings.how.is.it.going',
  'Au top et toi ? Tu veux quelque chose à boire ?',
);

// au revoir
manager.addDocument('fr', 'ciao', 'greetings.bye');
manager.addDocument('fr', 'au revoir', 'greetings.bye');
manager.addDocument('fr', 'a bientot', 'greetings.bye');
manager.addDocument('fr', 'a+', 'greetings.bye');
manager.addDocument('fr', '++', 'greetings.bye');

manager.addAnswer('fr', 'greetings.bye', 'A la prochaine ! :wave:');
manager.addAnswer('fr', 'greetings.bye', 'A plus ! :wave:');
manager.addAnswer('fr', 'greetings.bye', 'Bye ! :wave:');
manager.addAnswer('fr', 'greetings.bye', 'Ciao ! :wave:');

const normalizeString = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const isBeingPinged = (message) => {
  const botId = client.user.id;
  return message.mentions.users.get(botId);
};

(async () => {
  await manager.train();
  console.log('Done training!');
  manager.save();

  client.on('ready', () => {
    console.log(
      `Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`,
    );
    client.user.setActivity(`Pingez moi pour me parler`);
  });

  client.on('message', async (message) => {
    console.log('Received message!');
    if (message.author.bot) return;

    if (!isBeingPinged(message)) return;

    const messageWithoutMention = message.content
      .replace(/<@!\d+>/, '')
      .replace('  ', ' ');
    const parsedMessage = normalizeString(messageWithoutMention.toLowerCase());

    console.log('Processing...');
    const nlpResult = await manager.process('fr', parsedMessage);
    if (!nlpResult.answer) return;
    console.log('Sending message!');
    message.channel.send(nlpResult.answer);
  });

  client.login(config.token);
})();
