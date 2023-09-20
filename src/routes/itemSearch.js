const express = require('express');
const { searchItem } = require('../controllers/itemSearchController');
const { loginRequired } = require('../utils/auth');
const searchRouter = express.Router();

searchRouter.get('', loginRequired, searchItem);

module.exports = { searchRouter };
