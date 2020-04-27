const router = require("express").Router()
const userController = require("../controllers/user")

router.post("/login",userController.login)
router.post("/register",userController.register)
router.post("/gmail",userController.gmailuser)
router.get("/forgot/:email",userController.sendPassToEmail)
module.exports = router