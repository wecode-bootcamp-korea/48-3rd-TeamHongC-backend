const { AppDataSource } = require('./data-source');

const searchItem = async (userId, keyword) => {
  const searchKeyword = `%${keyword}%`;
  const item = await AppDataSource.query(
    `SELECT i.id AS itemId,
    MAX(ii.img_url) AS img_url AS imgUrl,
    i.title,
    MAX(i.price) AS price,
    CASE WHEN l.item_id IS NOT NULL THEN 1 ELSE 0 END AS liked
FROM items i
JOIN item_images ii ON i.id = ii.item_id
LEFT JOIN likes l ON i.id = l.item_id AND l.user_id = ?
WHERE i.id IN (
 SELECT DISTINCT i.id
 FROM items i
 JOIN item_images ii ON i.id = ii.item_id
 WHERE i.title LIKE ?
)
GROUP BY i.id, i.title;
`,
    [userId, searchKeyword]
  );
  return item;
};

module.exports = { searchItem };
