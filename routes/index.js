const express = require('express');
const router = express.Router();

const homeRouter = require('./home.js');
const todosRouter = require('./todos.js');

router.use('/', (req, res) => {
    res.send('masuk')
});
router.use('/todos', todosRouter);

module.exports = router;
