const itemSearchDao = require('../models/itemSearchDao');

const searchItem = async (keyword) => {
  const item = await itemSearchDao.searchItem(keyword);
  const result = item.length === 0 ? '검색 결과 없음' : item;

  return result;
};

module.exports = { searchItem };
