const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')
const api = require('./api')
router.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Connected to Server' })
})

router.use('/', user)
router.use('/todos', todo)
router.use('/api', api)

module.exports = router