const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController.js');

router.get('/', TodoController.showAll);
router.get('/:id', TodoController.showById);
router.post('/', TodoController.create);
router.put('/:id', TodoController.update);
module.exports = router