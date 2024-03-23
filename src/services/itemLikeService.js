const itemLikeDao = require('../models/itemLikeDao');

const postLike = async (userId, itemId) => {
  await itemLikeDao.likeItem(userId, itemId);
};

const deleteLike = async (userId, itemId) => {
  await itemLikeDao.deleteItem(userId, itemId);
};

module.exports = { postLike, deleteLike };
