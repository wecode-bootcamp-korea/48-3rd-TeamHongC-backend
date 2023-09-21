const itemSearchDao = require('../models/itemSearchDao');

const searchItem = async (userId, keyword) => {
  const item = await itemSearchDao.searchItem(userId, keyword);
  const result = item.length === 0 ? '검색 결과 없음' : item;

  return result;
};

module.exports = { searchItem };
