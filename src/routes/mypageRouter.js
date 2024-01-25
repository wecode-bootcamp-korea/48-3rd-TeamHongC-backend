
const express = require("express");
const mypageController = require("../controllers/mypageController");
const mypageRouter = express.Router();

mypageRouter.get("", mypageController.getMypage);

mypageRouter.get("/buyhistory", mypageController.getBuyHistory);

mypageRouter.get("/salehistory", mypageController.getSaleHistory);

module.exports = { mypageRouter };
