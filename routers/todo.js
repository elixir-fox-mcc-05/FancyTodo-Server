const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController.js');

router.get('/', TodoController.findAll);
router.get('/:id', TodoController.findById);

module.exports = router;