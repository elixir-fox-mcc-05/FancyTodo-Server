const router = require("express").Router()
const apiController = require("../controllers/api")

router.get('/',apiController.run)

module.exports = router