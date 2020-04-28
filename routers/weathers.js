const router = require('express').Router()
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://api.trakt.tv/movies/trending',
    {
        // headers:  {
        //     'trakt-api-key': process.env.SECRET_TRAKT,
        //     'trakt-api-version': 2
        // }
    })
    .then(results => {
        res.status(200).json({ results })
    })
    .catch(err => {
        res.status(403).json({err})
    })
})

module.exports = router