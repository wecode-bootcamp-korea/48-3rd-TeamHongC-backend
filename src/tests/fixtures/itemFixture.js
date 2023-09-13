const { AppDataSource } = require('../../models/data-source');

const createItems = (itemList) => {
  let data = [];
  for (item of itemList) {
    data.push([
      item.category_id,
      item.user_id,
      item.item_condition,
      item.title,
      item.price,
      item.longitude,
      item.latitude,
      item.region,
    ]);
  }

  return AppDataSource.query(
    `INSERT INTO items(
            category_id,
            user_id,
            item_condition,
            title,
            price,
            longitude,
            latitude,
            region
        ) VALUES ?`,
    [data]
  );
};

module.exports = { createItems };
