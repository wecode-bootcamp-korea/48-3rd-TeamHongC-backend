const express = require("express");
const paymentController = require("../controllers/payment.controller");
const paymentRouter = express.Router();
const { loginRequired } = require("../utils/auth");

paymentRouter.get("/:productId", paymentController.getList);
paymentRouter.post("/paid", paymentController.getPaymentData);
paymentRouter.post("/complete", paymentController.completePaid);
paymentRouter.delete("/delete", paymentController.deletePaid);

module.exports = { paymentRouter };
