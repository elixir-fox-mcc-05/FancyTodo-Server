const FancyTodo = require('../controllers/todo.js')
const router = require('express').Router()

router.get('/', FancyTodo.show)
router.get('/:id', FancyTodo.show_id)

router.post('/', FancyTodo.add)

router.put('/:id', FancyTodo.edit)

router.delete('/:id', FancyTodo.delete)

module.exports = router