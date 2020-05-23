const router = require('express').Router()
const ToDoController = require('../controllers/toDoController')
const authorization = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.get('/', ToDoController.list)
router.get('/all', ToDoController.listall)
router.post('/', ToDoController.createToDo)
router.get('/:id', authorization, ToDoController.getId)
router.put('/:id', authorization,  ToDoController.updateToDo)
router.delete('/:id', authorization, ToDoController.deleteToDo)

module.exports = router