const botBuilder = require('claudia-bot-builder')
const { searchWikipedia } = require('./src/api/wikipedia')
require('dotenv').config()

function FactBot (request) {
  const query = request.text
  return searchWikipedia(query)
    .then(res => {
      const answer = res.data.data
      if (!answer.length) {
        return 'Sorry, the item you searched is not found.'
      }
      return answer
    })
    .catch(error => {
      console.log(error)
      return 'Sorry, I encountered an error.'
    })
}

module.exports = botBuilder(FactBot);
