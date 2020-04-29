const router = require('express').Router()
const API = require('../controllers/API')

router.get('/', API.show)

module.exports = router