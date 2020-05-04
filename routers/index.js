const express = require('express');
const router = express.Router();
const todoRoute = require('./todo.js');
const userRouter = require('./user.js');

router.get('/', () => {
    console.log("Welcome to ToDo Apps");
  });
router.use('/todos', todoRoute);
router.use('/user', userRouter);

module.exports = router;