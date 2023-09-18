const paymentDao = require("../models/payment.dao");

const getPaymentList = async (productId) => {
  return await paymentDao.getPaymentList(productId);
};
module.exports = { getPaymentList };
