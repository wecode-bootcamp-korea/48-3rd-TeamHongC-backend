const itemCreateDao = require('../models/itemCreateDao');

const createItem = async (categoryId, itemDescription, itemCondition, title, price, itemCount, longitude, latitude, region, userId, imgUrl = []) => {
    const priceInt = parseInt(price.replace(/,/g, ''), 10);
    const itemId = await itemCreateDao.createItem(categoryId, itemDescription, itemCondition, title, priceInt, itemCount, longitude, latitude, region, userId);
    await itemCreateDao.createItemImages(itemId, imgUrl);

    return itemId;
};

module.exports = {
    createItem
};
