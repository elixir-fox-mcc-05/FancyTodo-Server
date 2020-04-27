const router = require('express').Router()
const ToDoController = require('../controllers/toDoController')



router.get('/todos', ToDoController.list)
router.post('/todos', ToDoController.createToDo)
router.get('/todos/:id', ToDoController.getId)
router.put('/todos/:id', ToDoController.updateToDo)
router.delete('/todos/:id', ToDoController.deleteToDo)

//router.post('/register', ToDoController.register)
//router.post('/login', ToDoController.login)

module.exports = router