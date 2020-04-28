const express = require('express');
const router = express.Router();

const todosRouter = require('./todos.js');
const usersRouter = require('./users.js');
const publicHolidayRouter = require('./publicHolidays.js')

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Welcome to server todos'
    })
});
router.use('/todos', todosRouter);
router.use('/users', usersRouter);
router.use('/public-holidays', publicHolidayRouter);

module.exports = router;
