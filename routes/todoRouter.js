const router = require('express').Router();
const TodoController = require('../controllers/todoController')
const authentication = require('../middlewares/authentication')

router.get('/', authentication, TodoController.findAll)
router.get('/:id', TodoController.findOne)
router.post('/', TodoController.create)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)

module.exports = router;