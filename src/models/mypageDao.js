const { AppDataSource } = require("../models/data-source");

const myProfile = async (userId) => {
  return await AppDataSource.query(
    ` 
        SELECT id, nickname, profile_image as profileImage
        FROM users u 
        WHERE id = ?;    
        `,
    [userId]
  );
};

const buyHistory = async (userId) => {
  return await AppDataSource.query(
    `
        SELECT      
        u.id as userId,
        i.id as itemId,
        i.title,
        i.price
        FROM items i 
        LEFT JOIN payment p ON i.id = p.item_id
        LEFT JOIN users u ON p.user_id = u.id 
        WHERE u.id = ?;
        `,
    [userId]
  );
};

const saleHistory = async (userId) => {
  return await AppDataSource.query(
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
        FROM items i
        LEFT JOIN users u ON i.user_id = u.id
        WHERE u.id = ?;
        `,
    [userId]
  );
};

module.exports = { myProfile, buyHistory, saleHistory };
