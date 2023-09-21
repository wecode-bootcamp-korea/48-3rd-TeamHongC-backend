const express = require("express");
const paymentController = require("../controllers/paymentController");
const paymentRouter = express.Router();
const { loginRequired } = require("../utils/auth");

paymentRouter.get("/:productId", loginRequired, paymentController.getList);
paymentRouter.post("/paid", loginRequired, paymentController.getPaymentData);
paymentRouter.post("/complete", loginRequired, paymentController.completePaid);
paymentRouter.delete("/delete", loginRequired, paymentController.deletePaid);

module.exports = { paymentRouter };
