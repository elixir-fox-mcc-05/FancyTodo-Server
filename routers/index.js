let router = require('express').Router()
let routerTodo = require('./todo')
let routerUser = require('./user')
let routerProject = require('./project')

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Welcome To Home'
    })
})

router.use('/todo',routerTodo)
router.use('/project',routerProject)
router.use('/user',routerUser)

module.exports = router