const router = require('express').Router()
const ProjectController = require('../controllers/projectController')
// const authorization = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.get('/', ProjectController.list)
router.post('/add', ProjectController.add)
router.put('/edit/:id',ProjectController.edit)
router.post('/delete/:id', ProjectController.delete)

module.exports = router