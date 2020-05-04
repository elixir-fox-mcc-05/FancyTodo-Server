const router = require('express').Router()
const todoController = require('../controllers/todoController')
const authentication = require('../middlewares/authentication')
const authorization= require('../middlewares/authorization')

router.get('/', authentication, todoController.showAll)
router.post('/', authentication, todoController.create)
router.get('/:id', authentication, todoController.findById)
router.put('/:id', authentication, authorization, todoController.update)
router.delete('/:id', authentication, authorization, todoController.delete)

module.exports = router