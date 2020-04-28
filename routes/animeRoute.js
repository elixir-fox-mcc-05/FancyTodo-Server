const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios
        .get('https://api.jikan.moe/v3/top/anime/1/movie')
        .then(respone => {
            const { data } = respone
            res.json({ movie: data.top});
        })
        .catch(err => {
            res.status(500).json({ errors: err });
        })
})

module.exports = router;