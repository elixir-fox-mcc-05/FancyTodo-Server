const router = require('express').Router()
const todoRouter = require('./todos')
// const userRouter = require('./users')

router.use('/todos', todoRouter)
// router.use('/users', userRouter)

module.exports = router