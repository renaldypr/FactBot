var botBuilder = require('claudia-bot-builder')

module.exports = botBuilder(function (request) {
  return 'Hi this is a test'
});
