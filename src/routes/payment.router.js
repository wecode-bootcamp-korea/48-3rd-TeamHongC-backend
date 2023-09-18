const express = require("express");

const paymentController = require("../controllers/payment.controller");

const paymentRouter = express.Router();

paymentRouter.get("/:productId", paymentController.getList);

module.exports = { paymentRouter };
