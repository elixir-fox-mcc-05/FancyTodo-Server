"use strict"

const router = require('express').Router()
const TodoController = require('../controllers/TodoController.js')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)

router.get('/', TodoController.read)
router.get('/:id', TodoController.findById)
router.post('/', TodoController.create)
router.put('/:id', authorization, TodoController.update)
router.delete('/:id', authorization, TodoController.delete)


module.exports = router;