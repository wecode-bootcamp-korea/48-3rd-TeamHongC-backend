const { catchAsync } = require('../utils/error');
const itemDetailService = require('../services/itemDetailService');

const getItemDetail = catchAsync(async (req, res) => {
  const { itemId } = req.params;
  const data = await itemDetailService.getItemDetail(itemId);
  res.status(200).json({ data: data });
});

module.exports = { getItemDetail };
