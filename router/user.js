const UserController = require('../controller/user.js')
const router = require('express').Router()

router.post('/signUp', UserController.signUp)
router.post('/signIn', UserController.signIn)
router.post('/googleLogin', UserController.googleLogin)



module.exports = router;