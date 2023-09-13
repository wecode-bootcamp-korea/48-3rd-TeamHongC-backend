const { catchAsync } = require('../utils/error');
const itemDetailService = require('../services/itemDetailService');

const getItemDetail = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await itemDetailService.getItemDetail(id);
  console.log(data);
  res.status(201).json({ data: data });
});

module.exports = { getItemDetail };
