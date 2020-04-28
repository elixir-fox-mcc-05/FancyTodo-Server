const router = require('express').Router()
const todo = require('./todo')
const UserController = require('../controllers/user')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/todos', todo)

module.exports = router