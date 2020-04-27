const router = require('express').Router();
const todoRouter = require('./todos.js');

router.get('/', () => {
  console.log("Welcome to ToDo Apps");
});
router.use('/todos', todoRouter);

module.exports = router;