"use strict"

const router = require('express').Router()
const UserController = require('../controllers/UserController.js')

// const authentication = require('../middlewares/authentication')

// router.get('/', UserController.read) // test purpose only for now
router.post('/register', UserController.register)
router.post('/login', UserController.login)


module.exports = router;