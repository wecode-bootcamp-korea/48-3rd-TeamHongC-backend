const express = require("express");

const mypageController = require("../controllers/mypageController");
const mypageRouter = express.Router();

const { loginRequired } = require("../utils/auth");

mypageRouter.get("/", loginRequired, mypageController.getMypage);

mypageRouter.get("/buyhistory", loginRequired, mypageController.getBuyHistory);

mypageRouter.get(
  "/salehistory",
  loginRequired,
  mypageController.getSaleHistory
);

module.exports = { mypageRouter };
