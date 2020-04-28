const router = require('express').Router();
const todoRouter = require('./todos.js');
const userRouter = require('./user.js');
const { verifyToken } = require('../helpers/jwt.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.get('/', () => {
  console.log("Welcome to ToDo Apps");
});
router.use('/', userRouter);
router.use('/todos', authentication,todoRouter);

module.exports = router;