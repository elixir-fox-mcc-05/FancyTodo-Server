const router = require('express').Router();
const UserController = require('../controllers/userController.js');

router.post('/', UserController.register);

module.exports = router;
