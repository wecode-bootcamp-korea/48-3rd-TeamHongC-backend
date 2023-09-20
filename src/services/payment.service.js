const { CustomRepositoryCannotInheritRepositoryError } = require("typeorm");
const paymentDao = require("../models/payment.dao");
const kakaoPayment = require("../utils/kakaopayment");
const { generateRandomCode } = require("../utils/ordernumber");

const getPaymentList = async (productId) => {
  return await paymentDao.getPaymentList(productId);
};

const getPayment = async (
  userId,
  quantity,
  itemId,
  itemName,
  totalAmount,
  approvalUrl,
  cancelUrl,
  failUrl
) => {
  const promiseId = generateRandomCode();
  const partnerOrderId = await promiseId.then((value) => value);
  const getPay = await kakaoPayment.readyPayment(
    userId,
    quantity,
    partnerOrderId,
    itemName,
    totalAmount,
    approvalUrl,
    cancelUrl,
    failUrl
  );

  const { tid, next_redirect_pc_url } = getPay;

  await paymentDao.addPayList(userId, itemId, totalAmount, partnerOrderId, tid);

  return next_redirect_pc_url;
};

const completePayment = async (userId, pgToken) => {
  try {
    const getPayment = await paymentDao.getPayment(userId);
    const { tid, partnerOrderId } = getPayment;
    await paymentDao.updatePgToken(userId, tid, pgToken);
    return await kakaoPayment.completePayment(
      userId,
      tid,
      partnerOrderId,
      pgToken
    );
  } catch {
    const err = new Error();
    err.statusCode = 400;
    throw err;
  }
};

const deletePayment = async (userId) => {
  await paymentDao.deletePayment(userId);
};
module.exports = { getPaymentList, getPayment, completePayment, deletePayment };
