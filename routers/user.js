let router = require('express').Router()
let ControllerUser = require('../controllers/user')

router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)

module.exports = router