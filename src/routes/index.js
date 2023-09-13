const express = require('express');
const { detailRouter } = require('./itemDetail');

const routes = express.Router();

routes.use('/item', detailRouter);

module.exports = { routes };
