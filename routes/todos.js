const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todosController')
const { authentication } = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', todosController.findAll)
router.post('/', todosController.createTodo)
router.get('/:id', authorization, todosController.findById)
router.put('/:id', authorization, todosController.updateTodo)
router.delete('/:id', authorization, todosController.deleteTodo)

module.exports = router