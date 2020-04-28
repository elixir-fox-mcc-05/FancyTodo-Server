'use strict'
const router = require(`express`).Router();

const UserController = require(`../controllers/usercontroller.js`);

router.get(`/`, UserController.getUsers)

router.post(`/register`, UserController.create)
router.post(`/login`, UserController.login)
router.delete(`/:id`, UserController.deleteUser)

// router.get(`/:id`, UserController.getOneTodo)
// router.put(`/:id`, UserController.updateTodo)

module.exports = router