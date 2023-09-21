const { AppDataSource } = require("./data-source");

const myProfile = async (userId) => {
  return await AppDataSource.query(
    ` 
            SELECT id,nickname,profile_image as profileImage
            from users u 
            WHERE id =?;    
            `,
    [userId]
  );
};

const buyHistory = async (userId) => {
  const buy = await AppDataSource.query(
    `
        SELECT      
        u.id as userid,
        i.id as itemid,
        i.title,
        i.price
        FROM  items i 
        LEFT  JOIN  payment p on i.id = p.item_id
        LEFT  JOIN users u on p.user_id = u.id 
        WHERE u.id =?;
        `,
    [userId]
  );
  return buy;
};

const saleHistory = async (userId) => {
  const sale = await AppDataSource.query(
    `
             SELECT
             u.id as userId,
             i.id as itemId,
             i.title,
             i.price,
             CASE
                WHEN i.item_count = 0 THEN '판매 완료'
                ELSE '판매 중'
            END as itemCount
             FROM  items i
             LEFT JOIN users u on i.user_id = u.id
            WHERE u.id =?;
            `,
    [userId]
  );

  return sale;
};

module.exports = { myProfile, buyHistory, saleHistory };
