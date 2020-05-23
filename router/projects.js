const router = require('express').Router()
const ProjectController = require('../controllers/projectController')
// const authorization = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.get('/', ProjectController.list)
router.post('/add', ProjectController.add)
router.post('/:id', ProjectController.invite)
// router.put('/:id', authorization,  ToDoController.updateToDo)
// router.delete('/:id', authorization, ToDoController.deleteToDo)

module.exports = router