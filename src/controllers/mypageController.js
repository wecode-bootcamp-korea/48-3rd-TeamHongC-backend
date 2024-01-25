const { catchAsync } = require("../utils/error");
const mypageService = require("../services/mypageService");

const getMypage = catchAsync(async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  const myPage = await mypageService.myProfile(userId);

  if (!myPage) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(myPage);
});

const getBuyHistory = catchAsync(async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  const buyHistory = await mypageService.buyHistory(userId);
  res.status(200).json(buyHistory);
});

const getSaleHistory = catchAsync(async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  const saleHistory = await mypageService.saleHistory(userId);
  res.status(200).json(saleHistory);
});

module.exports = { getMypage, getBuyHistory, getSaleHistory };




