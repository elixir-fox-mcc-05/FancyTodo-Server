const router = require("express").Router()
const todo = require("./todo")
const user = require("./user")
const apiQuotes = require("./api")

router.use("/todos",todo)
router.use("/user",user)
router.use("/apiquotes",apiQuotes)

module.exports = router