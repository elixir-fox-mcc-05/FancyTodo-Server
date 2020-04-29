const router = require("express").Router()
//middlewares
const authentication = require('../middlewares/authetication')
const authorization = require('../middlewares/authorization')

//Controller refrence
const Controller = require("../controllers/todo")
const UserController = require("../controllers/user")
const HolidayController = require('../controllers/holiday')

//Todo's Controller
router.get("/todos",authentication, Controller.findAll)
router.post("/todos",authentication, Controller.add)
router.get("/todos/:id",authentication, Controller.search)
router.put("/todos/:id",authentication, authorization,  Controller.update)
router.delete("/todos/:id",authentication, authorization, Controller.delete)

//User's Controller
router.post("/register", UserController.register)
router.post("/login", UserController.login)

//Holiday's Controller
router.get('/holiday', HolidayController.nager)


module.exports = router