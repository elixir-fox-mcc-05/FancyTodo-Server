const router = require('express').Router();
const todoRoute = require('./todo.js');
const userRoute = require('./user.js');

router.use('/todos', todoRoute);
router.use('/users', userRoute);

module.exports = router;
