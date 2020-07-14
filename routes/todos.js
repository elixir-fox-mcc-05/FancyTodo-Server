const router = require('express').Router();
const TodoController = require('../controllers/TodoController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.use(authentication);
router.get('/', TodoController.findAll);
router.post('/', TodoController.createTodo);
router.get('/:id', TodoController.findOne);
router.put('/:id', authorization, TodoController.updateTodo);
router.delete('/:id', authorization, TodoController.deleteTodo);

module.exports = router;