const router = require('express').Router();
const todoRouter = require('./todos.js');
const userRouter = require('./user.js');
const projectRouter = require('./projects.js');

router.get('/', () => {
  console.log("Welcome to ToDo Apps");
});
router.use('/', userRouter);
router.use('/todos', todoRouter);
router.use('/projects', projectRouter);

module.exports = router;