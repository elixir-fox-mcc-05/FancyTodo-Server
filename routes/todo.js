const router = require('express').Router()
const TodoController = require('../controllers/TodoController.js')

router.get('/', TodoController.read)

module.exports = router;