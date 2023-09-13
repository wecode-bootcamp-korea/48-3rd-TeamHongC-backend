const { AppDataSource } = require('./data-source');

const getItemDetail = async (id) => {
  const [detail] = await AppDataSource.query(
    `SELECT i.id,u.nickname, i.title,i.item_condition AS itemCondition,i.item_description AS description,i.price,i.item_count AS itemCount,i.region, i.created_at AS createdAt
        FROM items i
        JOIN users u
        ON u.id = i.user_id
        WHERE i.id = ?;`,
    [id]
  );
  return detail;
};

const getItemReview = async (id) => {
  const review = await AppDataSource.query(
    `select u.nickname,r.content
    from reviews r
    join users u
    on u.id = r.user_id
    where r.item_id = ?;`,
    [id]
  );
  return review;
};

const getItemImage = async (id) => {
  const image = await AppDataSource.query(
    `SELECT img_url AS imgUrl 
    FROM item_images ii
    JOIN items i
    ON i.id = ii.item_id
    WHERE ii.item_id = ?;`,
    [id]
  );

  return image;
};

module.exports = { getItemDetail, getItemReview, getItemImage };
