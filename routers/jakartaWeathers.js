const router = require('express').Router()
const weatherController = require('../controllers/weatherController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', weatherController.metaweather)

module.exports = router