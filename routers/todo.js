const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController.js');

router.get('/', TodoController.findAll);
router.post('/', TodoController.create);
router.get('/:id', TodoController.findById);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);

module.exports = router;