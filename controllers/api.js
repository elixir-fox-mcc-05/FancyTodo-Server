const axios = require('axios')

class ApiController {
    static getWeatherandSchedule(req, res, next) {

        let cityName = ''
        let weatherIcon = ''
        let cityWeather = ''
        let shalatSchedule = ''
        let city = req.body.city || 'jakarta'
        
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIKEY_WEATHER}`)
        .then(result => {
            cityName = {city: result.data.name, country: result.data.sys.country}
            weatherIcon = `http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
            cityWeather = {weather: result.data.weather[0], temp: result.data.main }
            return axios.get(`https://muslimsalat.com/${city}.json?key=${process.env.APIKEY_SHALAT}`)
        })
        .then(result => {
            shalatSchedule = result.data.items[0]
            return res.status(200).json({
                cityName,
                weatherIcon,
                cityWeather, 
                shalatSchedule 
            })
        })
        .catch(err => {
            return next(err)
        }) 
    }
}

module.exports = ApiController