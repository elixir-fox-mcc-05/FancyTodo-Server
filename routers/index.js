var express = require('express')
var router = express.Router()
const userRoute = require("./userRoute.js")
const taskRouter = require('./taskRouter.js')
const projectRouter = require('./projectRouter.js')
const projectUserRouter = require("./projectUserRouter")
const productivityNewsRouter = require("./productivityNewsRouter")

router.use('/', userRoute)
router.use('/tasks', taskRouter)
router.use('/projects', projectRouter)
router.use('/project_users', projectUserRouter)
router.use('/productivityNews', productivityNewsRouter)

module.exports = router