const router = require('express').Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.showAll)
router.post('/', todoController.create)
router.get('/:id', todoController.findById)
router.put('/:id', todoController.update)
router.delete('/:id',todoController.delete)

module.exports = router