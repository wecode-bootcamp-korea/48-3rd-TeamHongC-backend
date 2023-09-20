const { AppDataSource } = require('./data-source');

const getPaymentList = async (productId) => {
  try {
    const [product] = await AppDataSource.query(
      `
    SELECT
      i.id as productId,
      i.title as productName,
      i.price as price,
      i.item_count as count
    FROM
      items i
    WHERE i.id = ?
    `,
      [productId]
    );
    return product;
  } catch {
    const err = new Error();
    err.statusCode = 400;
    throw err;
  }
};

const addPayList = async (userId, itemId, totalAmount, partnerOrderId, tid) => {
  await AppDataSource.query(
    `
      INSERT INTO
      payment
      (
        user_id,
        item_id,
        total_price,
        payment_number,
        pg_token,
        t_id
      )
      VALUES
      (
        ?, ?, ?, ?, 'pending', ?
      )
      `,
    [userId, itemId, totalAmount, partnerOrderId, tid]
  );
};

const getPayment = async (userId) => {
  const [getList] = await AppDataSource.query(
    `
    SELECT
    t_id as tid,
    payment_number as partnerOrderId
    FROM
    payment
    WHERE user_id = ? AND pg_token = 'pending'
    `,
    [userId]
  );
  return getList;
};

const updatePgToken = async (userId, tid, pgToken) => {
  await AppDataSource.query(
    `
    UPDATE
    payment
    SET
    pg_token = ?
    WHERE user_id = ? AND t_id = ?
    `,
    [pgToken, userId, tid]
  );
};

const deletePayment = async (userId) => {
  await AppDataSource.query(
    `
    DELETE
    FROM
    payment
    WHERE user_id = ? AND pg_token = 'pending'
    `,
    [userId]
  );
};
module.exports = {
  getPaymentList,
  addPayList,
  getPayment,
  updatePgToken,
  deletePayment,
};
