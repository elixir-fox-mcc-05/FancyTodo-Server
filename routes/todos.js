const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController.js');
const { authenticateUser } = require('../middlewares/authentication.js');
const { authorizeUser } = require('../middlewares/authorization.js');

router.use(authenticateUser)
router.get('/', TodoController.showAll);
router.get('/:id', authorizeUser, TodoController.showById);
router.post('/', TodoController.create);
router.put('/:id', authorizeUser, TodoController.update);
router.delete('/:id', authorizeUser, TodoController.delete);

module.exports = router