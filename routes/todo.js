const express = require('express')
const router = express.Router()
const TodoController = require('../controller/controllerTodo')

router.get('/', TodoController.findAll)
router.post('/', TodoController.create)
router.get('/:id', TodoController.findOne)
router.put('/:id', TodoController.Update)
router.delete('/:id', TodoController.delete)

module.exports = router