const router = require('express').Router()
const todoRouter = require('./todos')
const userRouter = require('./users')
const holidayRouter = require('./indonesianHolidays')
const weatherRouter = require('./jakartaWeathers')

router.use('/', userRouter)
router.use('/todos', todoRouter)
router.use('/holidays', holidayRouter)
router.use('/weathers', weatherRouter)

module.exports = router