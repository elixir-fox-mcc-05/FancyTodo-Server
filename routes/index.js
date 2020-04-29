const router = require('express').Router()
const todos = require('./todos')
const user = require('./user')
const quote = require('./quote')


router.use('/todo', todos)
router.use('/user', user)
router.use('/quote', quote)


module.exports = router