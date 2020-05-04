const router = require('express').Router()
const Todos = require('../controllers/todos.js')
const Authentication = require('../middleware/authentication')
const Authorization = require('../middleware/authorization')

router.use(Authentication)
router.post('/', Todos.create)
router.get('/', Todos.findAll)
router.get('/:id', Authorization, Todos.findOne)
router.put('/:id', Authorization, Todos.update)
router.delete('/:id', Authorization, Todos.destroy)

module.exports = router 