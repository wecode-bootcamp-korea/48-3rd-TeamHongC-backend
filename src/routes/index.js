const express = require("express");
const { detailRouter } = require('./itemDetail');
const { userRouter } = require('./user.router');
const { surroundItemRouter } = require('./surroundItems');
const { paymentRouter } = require('./payment.router');
const { searchRouter } = require('./itemSearch');
const { likeRouter } = require('./itemLike');
const { createRouter } = require("./itemCreatRouter");
const { listRouter } = require("./itemListRouter");

const routes = express.Router();

routes.use('/product-detail', detailRouter);
routes.use('/user', userRouter);
routes.use('/my', surroundItemRouter);
routes.use('/item', detailRouter);
routes.use('/user', userRouter);
routes.use('/payment', paymentRouter);
routes.use('/items', searchRouter);
routes.use('/like', likeRouter);
routes.use("/item", createRouter);
routes.use("/itemList", listRouter);

module.exports = { routes };