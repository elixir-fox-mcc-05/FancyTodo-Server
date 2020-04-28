var express = require('express')
var router = express.Router()
const projectUserController= require("../controllers/projectUserController.js")

router.get('/', projectUserController.findAll)
router.post('/', projectUserController.addNewProjectUser)
router.put('/:id', projectUserController.editOneProjectUser)
router.delete('/:id', projectUserController.deleteOneProjectUser)

module.exports = router