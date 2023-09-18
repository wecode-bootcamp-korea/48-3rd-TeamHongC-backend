const surroundItemDao = require('../models/surroundItemDao');

const getSurroundItem = async (x, y, radius) => {
  const surroundItems = await surroundItemDao.getSurroundItem(x, y, radius);
  for (item of surroundItems) {
    item['latitude'] = parseFloat(item['latitude']);
    item['longitude'] = parseFloat(item['longitude']);
  }

  return surroundItems;
};

module.exports = { getSurroundItem };
