const paymentService = require("../services/paymentService");
const { catchAsync } = require("../utils/error");

const getList = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const getpaymentlist = await paymentService.getPaymentList(productId);
  res.status(200).json(getpaymentlist);
});

const getPaymentData = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const {
    quantity,
    itemId,
    itemName,
    totalAmount,
    approvalUrl,
    cancelUrl,
    failUrl,
  } = req.body;
  const getPayData = await paymentService.getPayment(
    userId,
    quantity,
    itemId,
    itemName,
    totalAmount,
    approvalUrl,
    cancelUrl,
    failUrl
  );

  res.status(200).json({ redirectUrl: getPayData });
});

const completePaid = catchAsync(async (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  const { pgToken } = req.body;
  await paymentService.completePayment(userId, pgToken);

  res.status(200).json("pay complete");
});

const deletePaid = catchAsync(async (req, res) => {
  const userId = req.user.id;
  await paymentService.deletePayment(userId);

  res.status(200).json("delete complete");
});
module.exports = { getList, getPaymentData, completePaid, deletePaid };
