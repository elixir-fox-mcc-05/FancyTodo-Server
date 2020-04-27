"use strict"


const router = require('express').Router()
const UserController = require('../controllers/UserController.js')

router.get('/', UserController.read)

module.exports = router;