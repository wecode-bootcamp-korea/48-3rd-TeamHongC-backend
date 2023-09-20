const { AppDataSource } = require('./data-source');

const likeItem = async (userId, itemId) => {
  await AppDataSource.query(`INSERT INTO likes (user_id,item_id) 
  SELECT ${userId},${itemId} FROM DUAL 
  WHERE NOT EXISTS (SELECT user_id,item_id FROM likes WHERE user_id = ${userId} AND item_id = ${itemId});`);
};

const deleteItem = async (userId, itemId) => {
  await AppDataSource.query(
    `DELETE FROM likes 
    WHERE user_id = ? AND item_id = ?`,
    [userId, itemId]
  );
};

module.exports = { likeItem, deleteItem };
