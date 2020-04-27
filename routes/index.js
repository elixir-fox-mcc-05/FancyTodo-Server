const express = require("express");
const router = express.Router();

const todoRoutes = require("./todoRoutes.js");
const userRoutes = require("./userRoutes.js");

router.use("/", userRoutes);
router.use("/todos", todoRoutes);

module.exports = router;