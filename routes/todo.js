const express = require('express')
const router = express.Router()
const TodoController = require('../controller/controllerTodo')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TodoController.findAll)
router.post('/', TodoController.create)
router.get('/:id', TodoController.findOne)
router.put('/:id', authorization, TodoController.Update)
router.delete('/:id', authorization, TodoController.delete)

module.exports = router