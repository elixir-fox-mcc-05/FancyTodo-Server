let router = require('express').Router()
let routerTodo = require('./todo')
let routerUser = require('./user')

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Welcome To Home'
    })
})

router.use('/todo',routerTodo)
router.use('/user',routerUser)

module.exports = router