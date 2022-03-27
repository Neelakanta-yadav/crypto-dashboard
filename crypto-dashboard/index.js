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
app.get('/convert', (req, res) => {
    const fromCurrency = req.query.from_currency
    const toCurrency = req.query.to_currency

    // console.log('fromCurrency', fromCurrency)
    // console.log('toCurrency', toCurrency)
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: { from_currency: fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency },
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
    };

    axios.request(options).then((response) => {
        res.json(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
        // console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
        // setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        // setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount);
        // setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
        // setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
        // setExchangedData({
        //     primaryCurrency: chosenPrimaryCurrency,
        //     secondaryCurrency: chosenSecondaryCurrency,
        //     exchangeRate: response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        // })
    }).catch((error) => {
        console.error(error);
    });
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

app.listen(PORT, () => console.log(`the server is running on port ${PORT}`))