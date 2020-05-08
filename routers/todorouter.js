'use strict'
const router = require(`express`).Router();

const TodoController = require(`../controllers/todocontroller.js`);
const { authenticate, authorize } = require(`../middlewares/userauth`)

router.post(`/`, authenticate, TodoController.create)
router.get (`/`, authenticate, TodoController.getTodos)
router.get (`/:id`, authenticate, TodoController.getOneTodo)
router.put (`/:id`, authenticate, authorize, TodoController.updateTodo)
router.put (`/:id/queued`, authenticate, authorize, TodoController.setQueue)
router.put (`/:id/active`, authenticate, authorize, TodoController.setActive)
router.put (`/:id/complete`, authenticate, authorize, TodoController.setComplete)
router.delete(`/:id`, authenticate, authorize, TodoController.deleteTodo)

module.exports = router