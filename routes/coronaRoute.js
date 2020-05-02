const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios
        .get('https://api.covid19api.com/total/country/indonesia')
        .then(respone => {
            const { data } = respone
            res.status(200).json({corona: data})
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;