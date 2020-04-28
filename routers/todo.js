const router = require('express').Router();
const TodoController = require('../controllers/todoController.js');

router.get('/', TodoController.getAllTodo);
router.get('/:id', TodoController.getTodoById);
router.post('/', TodoController.createTodo);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;
