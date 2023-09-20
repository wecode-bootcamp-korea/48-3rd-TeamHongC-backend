const { AppDataSource } = require('./data-source');

const searchItem = async (keyword) => {
  const searchKeyword = `%${keyword}%`;
  const item = await AppDataSource.query(
    `SELECT i.id,
    MAX(ii.img_url) AS img_url,
    i.title,
    MAX(i.price) AS price
FROM items i
JOIN item_images ii ON i.id = ii.item_id
WHERE i.id IN (
 SELECT DISTINCT i.id
 FROM items i
 JOIN item_images ii ON i.id = ii.item_id
 WHERE i.title LIKE ?
)
GROUP BY i.id, i.title;
`,
    [searchKeyword]
  );
  return item;
};

module.exports = { searchItem };
