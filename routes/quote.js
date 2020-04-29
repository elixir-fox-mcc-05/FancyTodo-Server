const router = require('express').Router()
const axios = require('axios')

router.get('/', (req, res) => {
    axios
        .get('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
        .then(output => {
            let quote = Math.floor(Math.random() * 100)
            res.status(200).json({
                quote: output.data[quote]
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
module.exports = router