"use strict"

const express = require("express");
const router = express.Router();
const ControllerTodo = require("../controllers/controllertodo.js");
const authentication = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

router.use(authentication);
router.get('/', ControllerTodo.showTodo);
router.post('/', ControllerTodo.addTodo);
router.get('/:id', ControllerTodo.findTodo);
router.delete('/:id', authorization, ControllerTodo.deleteTodo);
router.put("/:id", authorization, ControllerTodo.updateTodo);

module.exports = router;