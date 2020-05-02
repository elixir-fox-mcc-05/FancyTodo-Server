const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController.js")

router.get('/', function(req, res) {
    res.status(200).json({
        message: 'Home Domain Connected'
    })
})
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleSign', userController.googleSign)

module.exports = router