const router = require('express').Router()
const UserController = require('../controller/user.js')
const TodoController = require('../controller/todo.js')


router.get('/findAll', TodoController.findAll)
router.get('/:id', TodoController.findById)
router.post('/', TodoController.create)
router.delete('/:id', TodoController.delete)
router.put('/:id', TodoController.edit)


module.exports = router;