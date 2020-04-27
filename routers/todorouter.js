const router = require(`express`).Router();

const todoController = require(`../controllers/todocontroller.js`);

router.post(`/`, todoController.create)

module.exports = router