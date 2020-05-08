'use strict'
const router = require(`express`).Router();

const splashController = require(`../controllers/splashcontroller`)

router.get (`/random`, splashController.getRandom)

module.exports = router