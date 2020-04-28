var express = require('express')
var router = express.Router()
const productivityNewsController = require("../controllers/productivityNewsController.js")

router.get('/', productivityNewsController.showProductivityArticles)

module.exports = router