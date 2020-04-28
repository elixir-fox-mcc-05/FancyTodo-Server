let users = require('express').Router();
let UserCon = require('../controllers/usercon.js')

users.post('/signup', UserCon.signup )
users.post('/signin', UserCon.signin )


module.exports = users