const express = require('express');
const router = express.Router();
const todosRouter = require('./todos.js');
const usersRouter = require('./users.js');

router.use('/todos', todosRouter);
router.use('/users', usersRouter);

module.exports = router