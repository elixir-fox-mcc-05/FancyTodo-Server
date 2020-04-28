var express = require('express')
var router = express.Router()
const projectController = require("../controllers/projectController")

// > Authenticated user bisa membuat project dan invite/add member ke project tersebut.
// > Todo yang ada di suatu project hanya bisa di read/write (CRUD) oleh project members.

// authentication here
router.get('/', projectController.findAll)
router.post('/', projectController.addNewProject)
router.put('/:id', projectController.editOneProject)
router.delete('/:id', projectController.deleteOneProject)


// authorization here

module.exports = router