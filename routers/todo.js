const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController.js');
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

router.get('/', authentication, TodoController.findAll);
router.post('/', authentication, TodoController.create);
router.get('/:id', authentication, TodoController.findById);
router.put('/:id', authentication, authorization, TodoController.update);
router.delete('/:id', authentication, authorization, TodoController.delete);

module.exports = router;