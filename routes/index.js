const express = require("express");
const router = express.Router();

const todoRoutes = require("./todo.js");
router.use("/todos", todoRoutes);

const userRoutes = require("./user.js");
router.use("/users", userRoutes);

const foodRecipeRoutes = require("./foodrecipe.js");
router.use("/foodrecipe", foodRecipeRoutes);

module.exports = router;