const axios = require('axios')

function getWeather(){
    return new Promise((resolve, reject)=>{
        axios
            .get('http://www.7timer.info/bin/api.pl?lon=106.831&lat=-6.386&product=civillight&output=json')
            .then(data => {
                resolve(data)
            });
    })
}

module.exports = getWeather