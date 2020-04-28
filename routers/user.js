let router = require('express').Router()
let controlerUser = require('../controllers/user')

router.post('/register', controlerUser.register)
router.post('/login', controlerUser.login)

module.exports = router