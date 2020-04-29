const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const FancyTodo = require('../controllers/todo.js')
const router = require('express').Router()

router.post('/', authentication, FancyTodo.add)

router.get('/', authentication, FancyTodo.show)
router.get('/:id', authentication, FancyTodo.show_id)

router.put('/:id', authentication, authorization, FancyTodo.edit)

router.delete('/:id', authentication, authorization, FancyTodo.delete)

module.exports = router