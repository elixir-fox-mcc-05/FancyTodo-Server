var express = require('express')
var router = express.Router()
const userRoute = require("./userRoute.js")
const taskRouter = require('./taskRouter.js')
const projectRouter = require('./projectRouter.js')

router.use('/', userRoute)
router.use('/tasks', taskRouter)
// router.use('/projects', projectRouter)

module.exports = router