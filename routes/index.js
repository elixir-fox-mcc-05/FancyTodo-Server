const express = require("express");
const router = express.Router();

const todoRoutes = require("./todoRoutes.js");
const userRoutes = require("./userRoutes.js");
const checkIpRoutes = require("./checkIpRoutes.js");
const getRandomQuote = require("./getRandomQuote.js");

router.use("/", userRoutes);
router.use("/todos", todoRoutes);
router.use("/checkip", checkIpRoutes);
router.use("/randomquote", getRandomQuote);

module.exports = router;