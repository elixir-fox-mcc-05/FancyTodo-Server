const router = require('express').Router()
const ToDoController = require('../controllers/toDoController')



router.get('/', ToDoController.list)
router.post('/', ToDoController.createToDo)
router.get('/:id', ToDoController.getId)
router.put('/:id', ToDoController.updateToDo)
router.delete('/:id', ToDoController.deleteToDo)

module.exports = router