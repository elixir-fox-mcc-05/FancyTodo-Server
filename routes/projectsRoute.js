const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.post('/:id/addmember', authentication, ProjectController.addMember);
router.post('/', authentication, ProjectController.create);

module.exports = router;