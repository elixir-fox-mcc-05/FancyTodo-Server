let users = require('express').Router();
let UserCon = require('../controllers/usercon.js')

users.post('/signup', UserCon.signup )
users.post('/signin', UserCon.signin )
users.post('/googleSignin', UserCon.googleSignin)


module.exports = users