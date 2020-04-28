const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res, next) => {
    let date = new Date()
    let year = date.getFullYear()
    let path = `https://date.nager.at/api/v2/PublicHolidays/${year}/ID`
    axios.get(path)
        .then(response => {
            res.status(200).json({
                public_holidays: response.data
            })
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router