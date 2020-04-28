const router = require('express').Router()
// const ToDoController = require('../controllers/toDoController')
const UserController = require('../controllers/userController')
const todos = require('../router/todos')

router.use('/todos', todos)
// router.get('/todos', ToDoController.list)
// router.post('/todos', ToDoController.createToDo)
// router.get('/todos/:id', ToDoController.getId)
// router.put('/todos/:id', ToDoController.updateToDo)
// router.delete('/todos/:id', ToDoController.deleteToDo)

//router.post('/register', UserController.register)
//router.post('/login', UserController.login)

module.exports = router