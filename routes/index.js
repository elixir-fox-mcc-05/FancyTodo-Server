const express = require('express');
const router = express.Router();

const todosRouter = require('./todos.js');

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Welcome to server todos'
    })
});
router.use('/todos', todosRouter);

module.exports = router;
