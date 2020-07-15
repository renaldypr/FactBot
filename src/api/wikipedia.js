const { default: axios } = require('axios')

const api = axios.create({
  baseURL: process.env.CHATBOT_BACKEND_API_URL,
  timeout: 5000
})
function searchWikipedia(query) {
  return api
    .get('/wikipedia', {
      params: {
        search: query
      }
    })
}

module.exports = {
  searchWikipedia
}
