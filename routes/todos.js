const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todosController')

router.get('/', todosController.findAll)
router.post('/', todosController.createTodo)
router.get('/:id', todosController.findById)
router.put('/:id', todosController.updateTodo)
router.delete('/:id', todosController.deleteTodo)

module.exports = router