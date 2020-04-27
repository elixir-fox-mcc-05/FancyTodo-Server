const router = require(`express`).Router();

const TodoController = require(`../controllers/todocontroller.js`);

router.post(`/`, TodoController.create)
router.get(`/`, TodoController.getTodos)
router.get(`/:id`, TodoController.getOneTodo)
router.put(`/:id`, TodoController.updateTodo)
router.delete(`/:id`, TodoController.deleteTodo)

module.exports = router