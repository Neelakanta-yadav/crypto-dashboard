const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})
app.get('/news', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
      };
  
      axios.request(options).then((response) => {
        res.json(response.data)
      }).catch((error) => {
        console.error(error);
      });
    }
)

app.listen(PORT , ()=> console.log(`the server is running on port ${PORT}`))