const TodoController = require('../controller/todo.js')
const router = require('express').Router()


router.get('/findAll', TodoController.findAll)
router.get('/:id', TodoController.findById)
router.post('/', TodoController.create)
router.delete('/:id', TodoController.delete)
router.put('/:id', TodoController.edit)

module.exports = router;