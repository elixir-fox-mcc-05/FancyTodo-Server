const router = require('express').Router()
const todoRouter = require('./todos')
const userRouter = require('./users')
const holidayRouter = require('./indonesianHolidays')
const weatherRouter = require('./jakartaWeathers')

router.use('/todos', todoRouter)
router.use('/users', userRouter)
router.use('/holidays', holidayRouter)
router.use('/weathers', weatherRouter)

module.exports = router