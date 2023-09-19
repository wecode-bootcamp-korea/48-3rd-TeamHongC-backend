const { AppDataSource } = require('./data-source');

const searchItem = async (keyword) => {
  const searchKeyword = `%${keyword}%`;
  const [item] = await AppDataSource.query(
    `SELECT i.id,
        ii.img_url,
        i.title,
        i.price
        FROM items i
        JOIN item_images ii
        ON i.id = ii.item_id
        WHERE i.title LIKE ?
        group by i.id;`,
    [searchKeyword]
  );
  return item;
};

module.exports = { searchItem };
