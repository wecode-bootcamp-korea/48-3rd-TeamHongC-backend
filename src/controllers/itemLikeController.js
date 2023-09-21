const itemLikeService = require("../services/itemLikeService");
const { catchAsync } = require("../utils/error");

const likeItem = catchAsync(async (req, res) => {
  const { itemId } = req.body;
  const userId = req.user.id;
  console.log("ON: ", userId, itemId);
  await itemLikeService.postLike(userId, itemId);

  res.status(201).json({ message: "success" });
});

const deleteLike = catchAsync(async (req, res) => {
  const { itemId } = req.body;
  const userId = req.user.id;
  console.log("OFF : ", userId, itemId);
  await itemLikeService.deleteLike(userId, itemId);

  res.status(201).json({ message: "success" });
});

module.exports = { likeItem, deleteLike };
