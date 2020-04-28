const FancyTodo = require('../controllers/todo.js')
const authentication = require('../middlewares/authentication')
const router = require('express').Router()

router.post('/', authentication, FancyTodo.add)

router.get('/', authentication, FancyTodo.show)
router.get('/:id', authentication, FancyTodo.show_id)

router.put('/:id', authentication, FancyTodo.edit)

router.delete('/:id', authentication, FancyTodo.delete)

module.exports = router