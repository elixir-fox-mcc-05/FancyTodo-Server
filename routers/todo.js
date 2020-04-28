let router = require('express').Router()
let ControllerTodo = require('../controllers/todo')
let authentification = require('../middlewares/authetification')
let authorization = require('../middlewares/authorization')

router.use(authentification)
router.get('/', ControllerTodo.show)
router.post('/', ControllerTodo.create)
router.put('/:id', authorization, ControllerTodo.edit)
router.delete('/:id', authorization, ControllerTodo.delete)

module.exports = router