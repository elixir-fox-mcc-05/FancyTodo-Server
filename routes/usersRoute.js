const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const authentication = require('../middlewares/authentication.js');

router.post('/signin', UserController.signin);
router.post('/signup', UserController.signup);
router.post('/google-login', UserController.googleLogin);
router.get('/', authentication, UserController.findAll);

module.exports = router;