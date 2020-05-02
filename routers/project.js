const router = require('express').Router();
const ProjectController = require('../controllers/projectController.js');
const { authenticateUser } = require('../middlewares/authentication.js');
const { authorizeProjectMember } = require('../middlewares/authorization.js');

router.use(authenticateUser);
router.get('/', ProjectController.showProjects);
router.post('/', ProjectController.createProject);
router.put('/:id', authorizeProjectMember, ProjectController.editProject);
router.delete('/:id', authorizeProjectMember, ProjectController.deleteProject);
router.get('/members/:id', authorizeProjectMember, ProjectController.showAllMembers);
router.post('/members/:id', authorizeProjectMember, ProjectController.addMember);
router.get('/:id/todos', authorizeProjectMember, ProjectController.getProjectTodos);
router.post('/:id/todos', authorizeProjectMember, ProjectController.createProjectTodo);
router.put('/:project_id/todos/:todo_id', authorizeProjectMember, ProjectController.editProjectTodo);
router.delete('/:project_id/todos/:todo_id', authorizeProjectMember, ProjectController.deleteProjectTodo);

module.exports = router;
