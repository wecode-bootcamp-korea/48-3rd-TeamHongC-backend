const express = require("express");
const itemDetailController = require("../controllers/itemDetailController");
const detailRouter = express.Router();

detailRouter.get("/:itemId", itemDetailController.getItemDetail);
detailRouter.get("/review/:itemId", itemDetailController.getReview);

module.exports = { detailRouter };
