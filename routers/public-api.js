const router = require('express').Router();
const PublicApiController = require('../controllers/publicApiController.js');

router.get('/covid', PublicApiController.getAllCountries);
router.get('/covid/:country', PublicApiController.getSummaryPerCountry);

module.exports = router;
