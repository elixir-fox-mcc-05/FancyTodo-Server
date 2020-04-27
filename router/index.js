const router = require('express').Router()
const TodoRoutes = require('./todo.js')
const UserRoutes = require('./user.js')

// TODO
router.use('/todo', TodoRoutes)
// USER
router.use('/user', UserRoutes)

module.exports = router;