const express = require('express');
const { detailRouter } = require('./itemDetail');
const { userRouter } = require('./user.router');
const { surroundItemRouter } = require('./surroundItems');

const routes = express.Router();

routes.use('/product-detail', detailRouter);
routes.use('/user', userRouter);
routes.use('/my', surroundItemRouter);

module.exports = { routes };
