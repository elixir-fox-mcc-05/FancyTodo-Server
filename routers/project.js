let router = require('express').Router()
let ControllerProject = require('../controllers/project')
let authentification = require('../middlewares/authetification')

router.use(authentification)
router.get('/', ControllerProject.myProject)
router.get('/check/:user/:project', ControllerProject.check)
router.post('/', ControllerProject.create)
router.post('/invite', ControllerProject.invite)
router.put('/:id', ControllerProject.edit)
router.delete('/:id', ControllerProject.delete)

module.exports = router