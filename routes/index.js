const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')

router.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Connected to Server' })
})

router.use('/', user)
router.use('/todos', todo)

module.exports = router