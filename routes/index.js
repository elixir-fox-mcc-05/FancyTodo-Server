const express = require("express");
const router = express.Router();

const todoRoutes = require("./todoRoutes.js");
const userRoutes = require("./userRoutes.js");
const checkIpRoutes = require("./checkIpRoutes.js");

router.use("/", userRoutes);
router.use("/todos", todoRoutes);
router.use("/checkip", checkIpRoutes);

module.exports = router;