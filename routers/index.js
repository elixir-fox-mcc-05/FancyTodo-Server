const router = require("express").Router()
const Controller = require("../controllers/todo")

router.get("/todos", Controller.findAll)
router.post("/todos", Controller.add)
router.get("/todos/:id", Controller.search)
router.put("/todos/:id",  Controller.update)
router.delete("/todos/:id",  Controller.delete)

module.exports = router