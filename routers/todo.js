const router = require('express').Router();
const TodoController = require('../controllers/todoController.js');

router.get('/', TodoController.getAllTodo);
router.get('/:id', TodoController.getTodoById);
router.post('/', TodoController.createTodo);
router.put('/:id', TodoController.UpdateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;
