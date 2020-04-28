const axios = require('axios')

class jakartaWeather {
    static metaweather(req, res) {
        axios.get('https://www.metaweather.com/api/location/1047378/')
        .then(results => {
            res.status(200).json({ Jakarta_Weather: results.data })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            })
        })
    }
}

module.exports = jakartaWeather