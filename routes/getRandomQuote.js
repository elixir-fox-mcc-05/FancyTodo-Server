const express = require("express");
const router = express.Router();
const axios = require('axios');

//  https://pprathameshmore.github.io/QuoteGarden/

router.get('/', (req, res) => {
    axios
        .get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(data => {
            res.status(200).json({
                quote : data.data.quote
            })
        })
        .catch(err => {
            res.status(500).json({
                errors : err
            });
        })
})

module.exports = router;