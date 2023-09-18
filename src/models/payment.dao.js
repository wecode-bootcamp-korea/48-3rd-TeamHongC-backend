const { AppDataSource } = require("./data-source");

const getPaymentList = async (productId) => {
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
};
module.exports = { getPaymentList };
