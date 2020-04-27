const router = require('express').Router();
const todoRoute = require('./todo.js');

router.use('/todos', todoRoute)

module.exports = router;
