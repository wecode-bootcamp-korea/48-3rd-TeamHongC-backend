const itemSearchDao = require('../models/itemSearchDao');

const searchItem = async (keyword) => {
  const item = await itemSearchDao.searchItem(keyword);
  return item;
};

module.exports = { searchItem };
