const router = require('express').Router();
const PublicApiController = require('../controllers/publicApiController.js');
const { authenticateUser } = require('../middlewares/authentication.js');

router.use(authenticateUser) ;
router.get('/covid', PublicApiController.getAllCountries);
router.get('/covid/:country', PublicApiController.getSummaryPerCountry);

module.exports = router;
