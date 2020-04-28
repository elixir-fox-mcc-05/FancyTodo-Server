"use strict"

const express = require("express");
const ControllerTodo = require("../controllers/controllertodo.js");
const authentication = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

const router = express.Router();

router.use(authentication);

router.get('/', ControllerTodo.showTodo);

router.post('/', ControllerTodo.addTodo);

router.delete('/:id', ControllerTodo.deleteTodo);

router.get('/:id', ControllerTodo.findTodo);

router.put("/:id", authorization, ControllerTodo.updateTodo);

module.exports = router;