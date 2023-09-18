const express = require("express");
const { detailRouter } = require("./itemDetail");
const { userRouter } = require("./user.router");
const { surroundItemRouter } = require("./surroundItems");
const { paymentRouter } = require("./payment.router");

const routes = express.Router();

routes.use("/product-detail", detailRouter);
routes.use("/user", userRouter);
routes.use("/my", surroundItemRouter);
const { paymentRouter } = require("./payment.router");

routes.use("/item", detailRouter);
routes.use("/user", userRouter);
routes.use("/payment", paymentRouter);
module.exports = { routes };
