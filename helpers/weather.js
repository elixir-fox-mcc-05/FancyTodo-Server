const axios = require('axios')
const nextweek = require('../helpers/nextweek')

function getFullDate(date) {
    const times = date.toString().split('T')
    return times[0]
}



let now = new Date()
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
today = getFullDate(today)
console.log(today);


function checkWeather(date = today) {
    axios.get('https://www.metaweather.com/api/location/1047378/') // Jakarta's weather for next five days
    .then(results => {
        let weathers = results.data.consolidated_weather
        let array = []
        weathers.map(element => {
            let weather = {
                condition: element.weather_state_name,
                date: new Date(element.applicable_date)
            }
            array.push(weather)
        })

        array.map(element => {
            console.log(date);
            console.log(date == element.date);
            console.log(element);
        })

        let now = new Date()
        if (date > nextweek()) {
            return false
        } else if (date >= now) {
            array.map(element => {
                console.log(element);
                
                // if (date == element[1]) {
                //     console.log(element[0]);
                //     return element[0]
                // }
            })
        }        
    })
    .catch(err => console.log(err))
}

checkWeather()

module.exports = {
    checkWeather
}