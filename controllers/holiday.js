const axios = require('axios')

class HolidayController {
    static holiday(req, res, next) {
        let year = req.params.year
        axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/ID`) 
        .then((result) => {
            let data = result.data
            return res.status(200).json({
                holidays: data
            })
        }).catch((err) => {
            return next(err)
        });
    }
}

module.exports = HolidayController