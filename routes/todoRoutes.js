const express = require("express");
const router = express.Router();

const ToDoController = require("../controllers/todoController.js");
const authentication = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

router.use(authentication);
router.get("/", ToDoController.findAll);
router.post("/", ToDoController.create);
router.get("/:id", authorization, ToDoController.findById);
router.put("/:id", authorization, ToDoController.putById);
router.delete("/:id", authorization, ToDoController.deleteById);

module.exports = router;