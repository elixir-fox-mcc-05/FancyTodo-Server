const express = require('express');
const router = express.Router();
const todoRouter = require('./todoRouter.js');

router.get('/', (req, res) => {
    res.status(200).json({
        msg: "Fancy ToDo server working"
    })
})
router.use('/todos', todoRouter);


module.exports = router;