const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.post('/signin', UserController.signin);
router.post('/signup', UserController.signup);
router.get('/', UserController.findAll);

module.exports = router;