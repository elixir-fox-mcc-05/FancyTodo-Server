const axios = require('axios');

class PublicApiController {
    static getAllCountries(req, res, next) {
        axios.get('https://api.covid19api.com/summary', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                let countries = [];
                response.data.Countries.forEach(nation => {
                    countries.push(nation.Country)
                })
                countries.sort();
                res.status(200).json({
                    countries
                })
            })     
            .catch(err => {
                next(err);
            }) 
    }

    static getSummaryPerCountry(req, res, next) {
        const { country } = req.params;
        axios.get('https://api.covid19api.com/summary', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                let found = false;
                let result = {};
                if (country === 'Global') {
                    res.status(200).json({
                        country: response.data.Global
                    })
                } else {
                    response.data.Countries.forEach(nation => {
                        if(nation.Country === country) {
                            result = nation;
                            found = true;
                        }
                    })
                    if (found) {
                        res.status(200).json({
                            country: result
                        })
                    } else {
                        throw {
                            msg: "No country found",
                            code: 404
                        }
                    }
                }
            })     
            .catch(err => {
                next(err);
            })
    }
}

module.exports = PublicApiController;
