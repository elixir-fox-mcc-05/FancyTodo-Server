const router = require("express").Router();
const TodoController = require("../controllers/todoController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.use(authentication);
router.get("/", TodoController.findAll);
router.post("/", TodoController.create);

router.put("/:id", authorization, TodoController.update);
router.get("/:id", authorization, TodoController.findOne);
router.delete("/:id", authorization, TodoController.delete);

module.exports = router;
