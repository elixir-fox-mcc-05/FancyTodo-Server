const axios = require('axios')

class HolidayController {
    static holiday(req, res, next) {
        let year = new Date().getFullYear()
        let url = `https://date.nager.at/api/v2/PublicHolidays/${year}/ID`
        console.log(url);


        axios.get(url)
            .then(results => {
                res.status(200).json({
                    Indonesian_Holidays: results.data
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = HolidayController