const router = require('express').Router()
const TodoRoutes = require('./todo.js')
const UserRoutes = require('./user.js')

// TODO
router.use('/todos', TodoRoutes)
// USER
router.use('/users', UserRoutes)

module.exports = router;