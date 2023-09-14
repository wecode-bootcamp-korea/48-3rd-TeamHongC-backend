const express = require("express");
const { detailRouter } = require("./itemDetail");
const { userRouter } = require("./user.router");

const routes = express.Router();

routes.use("/item", detailRouter);

routes.use("/user", userRouter);
module.exports = { routes };
