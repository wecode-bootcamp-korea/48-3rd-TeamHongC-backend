const { AppDataSource } = require('./data-source');

const getSurroundItem = async (x, y, radius) => {
  const surround = await AppDataSource.query(
    `SELECT i.id,
    i.title,
    i.price,
    i.latitude,
    i.longitude,
    ii.img_url AS imgUrl,
        (6371*acos(cos(radians(${y}))*cos(radians(i.latitude))*cos(radians(i.longitude)
        -radians(${x}))+sin(radians(${y}))*sin(radians(i.latitude))))
        AS distance
    FROM items i
    JOIN item_images ii
    ON i.id = ii.item_id
    GROUP BY i.id
    HAVING distance <= ${radius}`
  );

  return surround;
};

module.exports = { getSurroundItem };
