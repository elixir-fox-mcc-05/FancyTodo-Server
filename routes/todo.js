"use strict"

const router = require('express').Router()
const TodoController = require('../controllers/TodoController.js')

router.get('/', TodoController.read)
router.get('/:id', TodoController.findById)
router.post('/', TodoController.create)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)


module.exports = router;