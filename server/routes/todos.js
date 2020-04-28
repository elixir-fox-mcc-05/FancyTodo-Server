const router = require('express').Router()
const Todos = require('../controllers/todos.js')
const Authentication = require('../middleware/authentication.js')


router.post('/', Todos.create)
router.get('/', Todos.findAll)
router.get('/:id', Todos.findOne)
router.put('/:id', Todos.update)
router.delete('/:id', Todos.destroy)

module.exports = router 