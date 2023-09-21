const express = require('express');
const { getAllItems, getCategory, getCondition } = require('../controllers/itemListController');
const listRouter = express.Router();
const { loginRequired } = require('../utils/auth');

listRouter.get('/all', loginRequired, getAllItems);
listRouter.get('/category', getCategory);
listRouter.get('/condition', getCondition);

module.exports = { listRouter };