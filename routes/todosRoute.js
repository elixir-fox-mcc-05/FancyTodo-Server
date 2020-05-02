const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.patch('/updatestatus/:id', authentication, authorization, TodoController.updateStatus);
router.patch('/:id', authentication, authorization, TodoController.update);
router.delete('/:id', authentication, authorization, TodoController.delete);
router.post('/', authentication, TodoController.create);
router.get('/', authentication, TodoController.findAll);
// router.patch('/:id', TodoController.update);
module.exports = router;