const itemListDao = require('../models/itemListDao');

const getAllItems = async (x, y, condition, categoryId, userId) => {
    const items=  await itemListDao.getAllItems(x, y, condition, categoryId, userId);

    items.forEach(item => {
            item.imgUrl = item.imgUrl ? [item.imgUrl.split(',')[0]] : [];
        delete item.imageUrl;
    });
    return items;
};

const getCategory = async () => {
    try {
        const categories = await itemListDao.getCategory();
        categories.unshift({ id: 'all', name: '전체'});
        return categories;
    } catch (err) {
        console.log(err);
    }
};

const getCondition = async () => {
    return [
        { value: 'all', label: '전체' },
        { value: 'new', label: '새상품' },
        { value: 'used', label: '중고' }
    ];
};

module.exports = {
    getAllItems,
    getCategory,
    getCondition
}