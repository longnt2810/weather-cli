const ora = require('ora')
const weatherService = require('../utils/weather_service')

DEFAULT_LOCATION = 'Hanoi'

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const location = args.location || args.l || DEFAULT_LOCATION
        const weather = await weatherService.weather_today(location)

        spinner.stop()

        console.log(`Current conditions in ${location}:`)
        console.log(`\t${weather.current.temp_c}° ${weather.current.condition.text} (Feels Like: ${weather.current.feelslike_c}) `)
    } catch (error) {
        spinner.stop()
        console.error(error)
    }
}