const router = require('express').Router();
const UserController = require('../controllers/UserController.js');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/google-login', UserController.googleLogin);
router.post('/facebook-login', UserController.facebookLogin);

module.exports = router;