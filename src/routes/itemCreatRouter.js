const express = require('express');
const { createItem } = require('../controllers/itemCreateController');
const createRouter = express.Router();
const { loginRequired } = require('../utils/auth');
const { upload } = require('../utils/aws');

createRouter.post('', loginRequired, upload.array('image'), createItem);

module.exports = { createRouter };