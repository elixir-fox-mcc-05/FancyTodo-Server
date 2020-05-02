let router = require('express').Router()
let ControllerUser = require('../controllers/user')

router.get('/', ControllerUser.show)
router.put('/:id', ControllerUser.change)
router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)
router.post('/googleLogin', ControllerUser.googleLogin)


module.exports = router