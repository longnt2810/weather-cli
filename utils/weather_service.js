require('dotenv').config();
const axios = require('axios')

const TODAY_URL = 'http://api.weatherapi.com/v1/current.json'
const FORECAST_URL = 'http://api.weatherapi.com/v1/forecast.json'

API_KEY = '16c2ffe816264eacb2c90813232206'

module.exports = {
    weather_today,
    weather_forecast
}

async function weather_today(location) {
    const results = await axios({
        method: 'get',
        url: TODAY_URL,
        params: {
            key: API_KEY,
            q: location,
        },
    })
    return results.data
}

async function weather_forecast(location) {
    const results = await axios({
        method: 'get',
        url: FORECAST_URL,
        params: {
            key: API_KEY,
            q: location,
            days: 10,
            aqi: 'no',
            alerts: 'no'
        },
    })
    return results.data
}