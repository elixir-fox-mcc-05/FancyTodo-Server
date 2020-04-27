const express = require("express");
const router = express.Router();

const ToDoController = require("../controllers/todoController.js");

router.get("/", ToDoController.findAll);
router.post("/", ToDoController.create);
router.get("/:id", ToDoController.findById);
router.put("/:id", ToDoController.putById);
router.delete("/:id", ToDoController.deleteById);

module.exports = router;