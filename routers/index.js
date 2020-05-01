const router = require('express').Router();
const todoRoute = require('./todo.js');
const userRoute = require('./user.js');
const publicApiRoute = require('./public-api.js');
const projectRoute = require('./project.js');

router.use('/todos', todoRoute);
router.use('/users', userRoute);
router.use('/public_apis', publicApiRoute);
router.use('/projects', projectRoute);

module.exports = router;
