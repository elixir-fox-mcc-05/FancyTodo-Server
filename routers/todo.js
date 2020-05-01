const router = require('express').Router();
const TodoController = require('../controllers/todoController.js');
const { authenticateUser } = require('../middlewares/authentication.js');
const { authorizeUser } = require('../middlewares/authorization.js');

router.use(authenticateUser)
router.get('/', TodoController.getAllTodo);
router.get('/:id', TodoController.getTodoById);
router.post('/', TodoController.createTodo);
router.put('/:id', authorizeUser, TodoController.updateTodo);
router.put('/check/:id', authorizeUser, TodoController.checkTodo);
router.delete('/:id', authorizeUser, TodoController.deleteTodo);

module.exports = router;
