const { catchAsync } = require("../utils/error");
const itemListService = require("../services/itemListService");

const getAllItems = catchAsync(async (req, res) => {
  const { x, y, condition, categoryId } = req.query;
  const userId = req.user.id;
  const items = await itemListService.getAllItems(
    x,
    y,
    condition,
    categoryId,
    userId
  );
  res.status(200).json(items);
});

const getCategory = catchAsync(async (req, res) => {
  const categories = await itemListService.getCategory();
  res.json(categories);
});

const getCondition = catchAsync(async (req, res) => {
  const conditions = await itemListService.getCondition();
  res.json(conditions);
});

module.exports = {
  getAllItems,
  getCategory,
  getCondition,
};
