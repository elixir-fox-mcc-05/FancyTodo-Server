const project_authentication = require('../middlewares/project_authentication')
const project_authorization = require('../middlewares/project_authorization')
const ProjectController = require('../controllers/project.js')
const router = require('express').Router()

router.post('/', project_authentication, ProjectController.add)

router.get('/', project_authentication, ProjectController.show)
router.get('/:id', project_authentication, ProjectController.show_id)

router.put('/:id', project_authentication, project_authorization, ProjectController.edit)

router.delete('/:id', project_authentication, project_authorization, ProjectController.delete)

module.exports = router