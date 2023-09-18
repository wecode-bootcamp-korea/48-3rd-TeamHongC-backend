const express = require('express');
const { getItemDetail } = require('../controllers/itemDetailController');
const detailRouter = express.Router();

detailRouter.get('/:itemId', getItemDetail);

module.exports = { detailRouter };
