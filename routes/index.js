const router = require('express').Router()
const todoRouter = require('./todo')
const userRouter = require('./user')
const apiRouter = require('./api')

router.use('/todos', todoRouter)
router.use('/users', userRouter)
router.use('/api', apiRouter)

module.exports = router