const router = require('express').Router()
const TodoController = require('../controllers/todoController')

router.post('/', TodoController.create)
router.get('/', TodoController.findAll)
router.get('/:id',  TodoController.findById)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.destroy)

module.exports = router