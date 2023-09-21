const express = require("express");
const { loginRequired } = require("../utils/auth");
const itemLikeController = require("../controllers/itemLikeController");

const likeRouter = express.Router();

likeRouter.post("/add", loginRequired, itemLikeController.likeItem);
likeRouter.post("/erase", loginRequired, itemLikeController.deleteLike);

module.exports = { likeRouter };
