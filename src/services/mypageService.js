const mypageDao = require("../models/mypageDao");

const myProfile = async (userId) => {
    return await mypageDao.myProfile(userId);
   
};
const buyHistory = async (userId) => {
    const buy = await mypageDao.buyHistory(userId);
    const BuyList = buy.map((item) => {
        item['price'] = item['price'].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        return item;
    });

    return BuyList;
};

const saleHistory = async (userId)=>{
    const sale = await mypageDao.saleHistory(userId);
    const saleList = sale.map((item) => {
        item['price'] = item['price'].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        return item;
    });
    return saleList;
};

module.exports = { myProfile,buyHistory,saleHistory };