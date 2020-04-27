const express = require('express');
const router = express.Router();
const todoRoute = require('./todo.js');

router.use('/todos', todoRoute);

module.exports = router;