const paymentService = require("../services/payment.service");
const { catchAsync } = require("../utils/error");

const getList = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const getpaymentlist = await paymentService.getPaymentList(productId);
  res.status(200).json(getpaymentlist);
});

module.exports = { getList };
