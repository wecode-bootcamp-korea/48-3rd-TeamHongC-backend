const itemSearchDao = require('../models/itemSearchDao');

const searchItem = async (keyword) => {
  const item = await itemSearchDao.searchItem(keyword);
  const result = item ? item : '검색 결과 없음';

  return result;

};

module.exports = { searchItem };
