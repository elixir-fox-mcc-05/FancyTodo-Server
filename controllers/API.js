const axios = require('axios')

class API {

    static weatherInfo(req, res, next) {
        console.log('test');
        let city = req.body.city || 'jakarta'
        let AP_ID = process.env.AP_ID

        axios
            .get(`https://muslimsalat.com/${city}.json?key=${AP_ID}`)

        .then((result) => {
            console.log('dapet result')
            let data = result.data
            return res.status(200).json({ data: data })
        })

        .catch((err) => {
            return next(err)
        })
    }

}

module.exports = API