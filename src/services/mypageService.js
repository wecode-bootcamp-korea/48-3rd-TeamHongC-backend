const mypageDao = require("../models/mypageDao");

const formatPrice = (data) => {
  return data.map((item) => {
    item["price"] = item["price"].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return item;
  });
};

const myProfile = async (userId) => {
  return await mypageDao.myProfile(userId);
};

const buyHistory = async (userId) => {
  const buy = await mypageDao.buyHistory(userId);
  return formatPrice(buy);
};

const saleHistory = async (userId) => {
  const sale = await mypageDao.saleHistory(userId);
  return formatPrice(sale);
};

module.exports = { myProfile, buyHistory, saleHistory };
