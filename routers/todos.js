const router = require('express').Router()
const TodoController = require('../controllers/todoController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/', TodoController.create)
router.get('/', TodoController.findAll)
router.get('/:id',  TodoController.findById)
router.put('/:id', authorization, TodoController.update)
router.delete('/:id', authorization, TodoController.destroy)

module.exports = router