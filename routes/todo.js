"use strict"

const express = require("express");
const ControllerTodo = require("../controllers/controllertodo.js");

const router = express.Router();

router.get('/', ControllerTodo.showTodo);

router.post('/', ControllerTodo.addTodo);

router.delete('/:id', ControllerTodo.deleteTodo);

router.get('/:id', ControllerTodo.findTodo);

router.put("/:id", ControllerTodo.updateTodo);

module.exports = router;