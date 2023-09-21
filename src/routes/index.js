const express = require("express");
const { detailRouter } = require("./itemDetail");
const { userRouter } = require("./userRouter");
const { surroundItemRouter } = require("./surroundItems");
const { paymentRouter } = require("./paymentRouter");
const { searchRouter } = require("./itemSearch");
const { likeRouter } = require("./itemLike");
const { createRouter } = require("./itemCreatRouter");
const { listRouter } = require("./itemListRouter");
const { mypageRouter } = require("./mypageRouter");

const routes = express.Router();

routes.use("/product-detail", detailRouter);
routes.use("/user", userRouter);
routes.use("/my", surroundItemRouter);
routes.use("/item", detailRouter);
routes.use("/user", userRouter);
routes.use("/payment", paymentRouter);
routes.use("/items", searchRouter);
routes.use("/like", likeRouter);
routes.use("/item", createRouter);
routes.use("/itemList", listRouter);
routes.use("/mypage", mypageRouter);

module.exports = { routes };
