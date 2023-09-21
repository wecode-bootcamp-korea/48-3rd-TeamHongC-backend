const { catchAsync } = require('../utils/error');
const itemSearchService = require('../services/itemSearchService');

const searchItem = catchAsync(async (req, res) => {
  const keyword = req.query.keyword;
  const userId = req.user.id;
  const response =
    keyword.length === 0
      ? { data: '검색 결과 없음' }
      : { data: await itemSearchService.searchItem(userId, keyword) };

  res.status(200).json(response);
});

module.exports = { searchItem };
