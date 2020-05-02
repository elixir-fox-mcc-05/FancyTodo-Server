const router = require('express').Router()
const UserController = require('../controllers/user')
const todo = require('./todo')
const project = require('./project')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/google-signin', UserController.google_signin)

router.get('/users', UserController.findAll)

router.use('/projects', project)

router.use('/todos', todo)

module.exports = router