const express = require("express");
const { getSurroundItem } = require("../controllers/surroundItemController");
const surroundItemRouter = express.Router();

surroundItemRouter.get("/surround", getSurroundItem);

module.exports = { surroundItemRouter };
