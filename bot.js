require('dotenv').config();
const { Bot } = require('grammy');
const { searchWikipedia } = require('./src/api/wikipedia');

// Instantiate the bot
const bot = new Bot(process.env.BOT_TOKEN);

// Add a message handler
bot.on('message', async (ctx) => {
  const query = ctx.message.text;
  searchWikipedia(query)
    .then(res => {
      const answer = res.data.data;
      if (answer && answer.length) { // check if answer is not null and not empty
        ctx.reply(answer);
      } else {
        ctx.reply('Sorry, the item you searched is not found.');
      }
    })
    .catch(error => {
      console.error(error);
      ctx.reply('Sorry, I encountered an error.');
    });
});

// Start the bot
bot.start();
