const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController.js');

router.patch('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);
router.post('/', TodoController.create);
router.get('/', TodoController.findAll);
router.patch('/:id', TodoController.update);
module.exports = router;