const { AppDataSource } = require('./data-source');

const getSurroundItem = async (x, y, radius) => {
  const surround = await AppDataSource.query(
    `SELECT id, title, price, latitude, longitude, imgUrl, distance
    FROM (
        SELECT i.id,
            i.title,
            i.price,
            i.latitude,
            i.longitude,
            MAX(ii.img_url) AS imgUrl,
            (6371 * acos(cos(radians(${y})) * cos(radians(i.latitude)) * cos(radians(i.longitude) - radians(${x})) + sin(radians(${y})) * sin(radians(i.latitude)))) AS distance
        FROM items i
        JOIN item_images ii ON i.id = ii.item_id
        GROUP BY i.id, i.title, i.price, i.latitude, i.longitude
        HAVING distance <= ${radius}
    ) AS filtered_items;`
  );

  return surround;
};

module.exports = { getSurroundItem };
