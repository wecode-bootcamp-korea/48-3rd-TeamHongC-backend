const { catchAsync } = require("../utils/error");
const mypageService = require("../services/mypageService");

const getMypage = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const myPage = await mypageService.myProfile(userId);
  res.status(201).json(myPage);
});

const getBuyHistory = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const buy = await mypageService.buyHistory(userId);
  res.status(201).json(buy);
});

const getSaleHistory = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const sale = await mypageService.saleHistory(userId);
  res.status(201).json(sale);
});

module.exports = { getBuyHistory, getSaleHistory, getMypage };
