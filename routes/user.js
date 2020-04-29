const router = require('express').Router()
const userController = require('../controller/controlleruser')

router.post('/register', userController.register)
router.post('/google-login', userController.googleLogin)
router.post('/login', userController.login)

module.exports = router