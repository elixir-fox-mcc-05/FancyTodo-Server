const express = require('express')
const router = express.Router()
const TodoController = require('../controller/controllerTodo')
const authentication = require('../middlewares/authentication')

router.get('/', authentication, TodoController.findAll)
router.post('/', authentication, TodoController.create)
router.get('/:id', authentication, TodoController.findOne)
router.put('/:id', authentication, TodoController.Update)
router.delete('/:id', authentication, TodoController.delete)

module.exports = router