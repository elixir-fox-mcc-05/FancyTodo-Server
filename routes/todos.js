const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController.js');

router.get('/', TodoController.showAll);

module.exports = router