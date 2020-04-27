const router = require('express').Router();
const TodoController = require('../controllers/TodoController.js');

router.get('/', TodoController.findAll);
router.post('/', TodoController.createTodo);
router.get('/:id', TodoController.findOne);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;