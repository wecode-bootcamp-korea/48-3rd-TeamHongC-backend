const express = require("express");
const { detailRouter } = require("./itemDetail");
const { userRouter } = require("./userRouter");
const { surroundItemRouter } = require("./surroundItems");
const { paymentRouter } = require("./paymentRouter");
const { searchRouter } = require("./itemSearch");
const { likeRouter } = require("./itemLike");
const { createRouter } = require("./itemCreatRouter");
const { listRouter } = require("./itemListRouter");

const routes = express.Router();

routes.use("/detail", detailRouter);
routes.use("/user", userRouter);
routes.use("/location", surroundItemRouter);
routes.use("/payment", paymentRouter);
routes.use("/serch", searchRouter);
routes.use("/like", likeRouter);
routes.use("/item", createRouter);
routes.use("/itemList", listRouter);

module.exports = { routes };
