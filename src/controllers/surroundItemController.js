const surroundItemService = require('../services/surroundItemService');
const { catchAsync } = require('../utils/error');

const getSurroundItem = catchAsync(async (req, res) => {
  const { x, y, radius } = req.query;
  const data = await surroundItemService.getSurroundItem(x, y, radius);

  res.status(200).json({ data: data });
});

module.exports = { getSurroundItem };
