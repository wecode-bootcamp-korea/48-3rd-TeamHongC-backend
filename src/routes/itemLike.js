const express = require('express');
const { loginRequired } = require('../utils/auth');
const itemLikeController = require('../controllers/itemLikeController');

const likeRouter = express.Router();

likeRouter.post('', loginRequired, itemLikeController.likeItem);
likeRouter.delete('', loginRequired, itemLikeController.deleteLike);

module.exports = { likeRouter };
