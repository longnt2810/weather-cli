require('dotenv').config();
const ora = require('ora')
const weatherService = require('../utils/weather_service')

DEFAULT_LOCATION = 'Hanoi'

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const location = args.location || args.l || DEFAULT_LOCATION
        const weather = await weatherService.weather_forecast(location)

        spinner.stop()

        console.log(`Forecast for ${location}:`)
        weather.forecast.forecastday.forEach(item => {
            console.log(`\t${item.date} - Avg: ${item.day.avgtemp_c}° | Low: ${item.day.mintemp_c}° | High: ${item.day.maxtemp_c}° | ${item.day.condition.text}`)
        })
        // console.log(`\t${weather.current.temp_c}° ${weather.current.condition.text} (Feels Like: ${weather.current.feelslike_c}) `)
    } catch (error) {
        spinner.stop()
        console.error(error)
    }
}