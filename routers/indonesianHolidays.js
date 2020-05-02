const router = require('express').Router()
const holidayController = require('../controllers/holidayController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', holidayController.nager)

module.exports = router