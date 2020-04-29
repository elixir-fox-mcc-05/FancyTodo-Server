const router = require('express').Router();
const PublicApiController = require('../controllers/publicApiController.js');

router.get('/movies', PublicApiController.getMovieRecommendation);

module.exports = router;
