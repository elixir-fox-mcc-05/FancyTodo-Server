const TodoController = require('../controller/todo.js')
const router = require('express').Router()
const  authentication  = require('../middleware/authentication.js')
const  authorization  = require('../middleware/authorization.js')


router.get('/', authentication,TodoController.findAll)
router.get('/:id', authentication, TodoController.findById)
router.post('/', authentication, TodoController.create)
router.delete('/:id', authentication, authorization, TodoController.delete)
router.put('/:id', authentication, authorization,TodoController.edit)


module.exports = router;