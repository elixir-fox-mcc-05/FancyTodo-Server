let router = require('express').Router()
let controlerTodo = require('../controllers/todo')

router.get('/', controlerTodo.show)
router.post('/', controlerTodo.create)
router.put('/:id', controlerTodo.edit)
router.delete('/:id', controlerTodo.delete)

module.exports = router