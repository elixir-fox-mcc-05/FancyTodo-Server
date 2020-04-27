const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController.js');

router.post('/', TodoController.createTodo);
router.get('/', TodoController.readAllTodo);
router.get('/:id', TodoController.searchTodo);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;