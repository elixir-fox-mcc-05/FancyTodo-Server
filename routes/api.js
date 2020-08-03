const router = require('express').Router()
const ApiController = require('../controllers/api')

router.get('/', ApiController.getWeatherandSchedule)

module.exports = router