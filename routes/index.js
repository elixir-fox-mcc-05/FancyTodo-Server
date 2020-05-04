const router = require("express").Router();
const todoRouter = require("./todoRouter");
const userRouter = require("./userRouter");
const covidRouter = require("./covid");

router.use("/todos", todoRouter);
router.use("/users", userRouter);
router.use("/covid", covidRouter);

module.exports = router;
