const router = require("express").Router()
//middlewares
const authentication = require('../middlewares/authetication')
const authorization = require('../middlewares/authorization')

//router.use(authentication)
//Controller refrence
const Controller = require("../controllers/todo")
const UserController = require("../controllers/user")

//Todo's Controller
router.get("/todos",authentication, Controller.findAll)
router.post("/todos",authentication, Controller.add)
router.get("/todos/:id",authentication, Controller.search)
router.put("/todos/:id",authentication, authorization,  Controller.update)
router.delete("/todos/:id",authentication, authorization, Controller.delete)

//User's Controller
router.post("/register", UserController.register)
router.post("/login", UserController.login)

module.exports = router