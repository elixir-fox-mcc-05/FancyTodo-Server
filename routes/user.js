"use strict"

const express = require("express");
const ControllerUser = require("../controllers/controlleruser.js");
const router = express.Router();

router.post('/signup', ControllerUser.signup);
router.post('/signin', ControllerUser.signin);


module.exports = router;