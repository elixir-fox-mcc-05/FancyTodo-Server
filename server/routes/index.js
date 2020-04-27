const router = require('express').Router()
const todos = require('./todos')
const user = require('./user')

router.use('/todo', todos)
router.use('/user', user)

module.exports = router