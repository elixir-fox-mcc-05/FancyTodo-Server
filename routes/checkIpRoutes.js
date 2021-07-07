const express = require("express");
const router = express.Router();
const axios = require('axios');

// https://www.kwelo.com/network/ip-address/my-public-ip#rest-api

router.get('/', (req, res) => {
    axios
        .get('https://api.kwelo.com/v1/network/ip-address/my')
        .then(data => {
            res.status(200).json({
                ipAddress : data.data
            })
        })
        .catch(err => {
            res.status(500).json({
                errors : err
            });
        })
})

module.exports = router;