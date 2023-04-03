const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");
const todoRoutes = require("./todo.route");

let rootRouter = router;

rootRouter.use("/user", userRoutes);
rootRouter.use("/todo", todoRoutes);

module.exports = rootRouter;
