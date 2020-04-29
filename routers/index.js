const router = require('express').Router();
const todoRoute = require('./todo.js');
const userRoute = require('./user.js');
const publicApiRoute = require('./public-api.js');

router.use('/todos', todoRoute);
router.use('/users', userRoute);
router.use('/public_apis', publicApiRoute);

module.exports = router;
