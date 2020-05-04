const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');
const TodoController = require('../controllers/todoController.js');

router.use(authentication)
router.post('/', TodoController.createTodo);
router.get('/', TodoController.readAllTodo);
router.get('/:id', TodoController.searchTodo);
router.put('/:id', authorization, TodoController.updateTodo);
router.delete('/:id', authorization, TodoController.deleteTodo);

module.exports = router;