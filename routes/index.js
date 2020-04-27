const express = require("express");
const router = express.Router();

const todoRoutes = require("./todo.js");
router.use("/todos", todoRoutes);

module.exports = router;