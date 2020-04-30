const axios = require('axios')

class API {

    static show(req, res, next) {
        axios.get(`https://api.ipify.org`)
            .then((result) => {
                const ip = result.data
                return API.getLocation(ip)
            })
            .then((payload) => {
                return API.getSchedule(payload)

            })
            .then((data) => {
                console.log('success load schedule')
                return res.status(200).json({ data })
            })
            .catch((err) => {
                return next(err)
            })
    }

    static getLocation(ip) {
        return new Promise((resolve, reject) => {
            let KEY = process.env.ACCESS_KEY
            axios.get(`http://api.ipstack.com/${ip}?access_key=${KEY}`)
                .then((result) => {
                    let data = {
                        city: result.data.city,
                        ip: result.data.ip
                    }
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    static getSchedule(payload) {
        return new Promise((resolve, reject) => {
            console.log('test kecepatan schedule');
            let AP_ID = process.env.AP_ID
            console.log(AP_ID)
            let city = payload.city
            axios.get('https://muslimsalat.com/' + city + '.json?key=' + AP_ID)
                .then((result) => {
                    let data = {
                        ip: payload.ip,
                        data: result.data
                    }
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

module.exports = API