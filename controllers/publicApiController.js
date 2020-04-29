const axios = require('axios');

class PublicApiController {
    static getMovieRecommendation(req, res, next) {
        axios.get('https://api.trakt.tv/movies/trending', {
            headers: {
                "Content-Type": "application/json",
                "trakt-api-version": 2,
                "trakt-api-key": process.env.TRAKT_API_KEY
            }
        })
            .then(response => {
                res.status(200).json({
                    movies: response.data
                })
            })     
            .catch(err => {
                next(err);
            }) 
    }
}

module.exports = PublicApiController;
