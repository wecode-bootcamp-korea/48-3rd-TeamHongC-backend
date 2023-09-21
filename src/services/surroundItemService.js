const surroundItemDao = require("../models/surroundItemDao");

const getSurroundItem = async (x, y, radius) => {
  try {
    const surroundItems = await surroundItemDao.getSurroundItem(x, y, radius);
    for (item of surroundItems) {
      item["latitude"] = parseFloat(item["latitude"]);
      item["longitude"] = parseFloat(item["longitude"]);
    }

    return surroundItems;
  } catch (err) {
    err.status = 400;
    throw err;
  }
};

module.exports = { getSurroundItem };
