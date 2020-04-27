const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const TodoController = require('../controllers/TodoController')

router.use(authentication)
router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findOne)
router.post('/add', TodoController.add)
router.put('/:id', authorization, TodoController.edit)
router.delete('/delete/:id', authorization, TodoController.delete)

module.exports = router