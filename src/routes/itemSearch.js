const express = require('express');
const { searchItem } = require('../controllers/itemSearchController');

const searchRouter = express.Router();

searchRouter.get('', searchItem);

module.exports = { searchRouter };
