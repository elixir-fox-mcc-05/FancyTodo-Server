var express = require('express')
var router = express.Router()
const taskController = require("../controllers/taskController")
const authentication = require("../middlewares/authentication.js")
const authorization = require("../middlewares/authorization")


router.use(authentication)
//authentication here
router.get('/', taskController.findAll)
router.get('/:id', taskController.findOne)
router.post('/', taskController.addTask)

//authorization here
router.put('/:id', authorization, taskController.updateTaskDetails)
router.patch('/:id/complete', authorization, taskController.completeTaskStatus)
router.patch('/:id/uncomplete', authorization, taskController.uncompleteTaskStatus)
router.delete('/:id', authorization, taskController.deleteTask)

module.exports = router