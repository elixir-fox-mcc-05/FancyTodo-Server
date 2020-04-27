const router = require('express').Router()
const todoRouter = require('./todoRouter')

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'data from router'
    })
})  
router.use('/todos', todoRouter)

module.exports = router