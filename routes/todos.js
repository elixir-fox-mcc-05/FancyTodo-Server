const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todosController')

router.post('/', todosController.createTodo)
router.get('/', todosController.findAll)
router.get('/:id', todosController.findById)
router.put('/:id', todosController.updateTodo)
router.delete('/:id', todosController.createTodo)

module.exports = router