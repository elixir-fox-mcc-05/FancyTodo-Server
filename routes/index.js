const express = require('express')
const router = express.Router()
const TodoRouter = require('./todo.js')
const UserRouter = require('./user')

router.use('/todos', TodoRouter)
router.use('/user', UserRouter)

module.exports = router
