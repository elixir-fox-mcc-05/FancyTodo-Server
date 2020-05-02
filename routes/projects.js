const router = require('express').Router();
const ProjectController = require('../controllers/ProjectController.js');
const TodoController = require('../controllers/TodoController.js');
const authentication = require('../middlewares/authentication.js');
const projectAuth = require('../middlewares/projectAuth.js');

router.use(authentication);
router.get('/', ProjectController.findAll);
router.post('/', ProjectController.createProject);
router.get('/:projectid', projectAuth, ProjectController.getProject);
router.put('/:projectid', projectAuth, ProjectController.updateProject);
router.post('/:projectid', projectAuth, ProjectController.addMember);
router.delete('/:projectid', projectAuth, ProjectController.deleteProject);
router.get('/:projectid/todos', projectAuth, ProjectController.findTodoProject);
router.post('/:projectid/todos/', projectAuth, TodoController.createTodo);
router.put('/:projectid/todos/:id', projectAuth, TodoController.updateTodo);
router.delete('/:projectid/todos/:id', projectAuth, TodoController.deleteTodo);

module.exports = router;