const { catchAsync } = require('../utils/error');
const itemCreateService = require('../services/itemCreateService');

const createItem = catchAsync(async (req, res) => {
    const { categoryId, itemDescription, itemCondition, title, price, itemCount, longitude, latitude, region } = req.body;
    const userId = req.user.id;
    const imgUrl = req.files.map(file => file.location);

    const item = await itemCreateService.createItem(categoryId, itemDescription, itemCondition, title, price, itemCount, longitude, latitude, region, userId, imgUrl);
    res.status(200).json({ item });
});

module.exports = {
    createItem
}