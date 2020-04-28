const router = require('express').Router()
const todoRouter = require('./todos')
const userRouter = require('./users')
// const weatherRouter = require('./weathers')

router.use('/todos', todoRouter)
router.use('/users', userRouter)
// router.use('/weathers', weatherRouter)

module.exports = router