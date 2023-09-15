const express = require("express");

const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/kakaosign", userController.kakaoSign);

module.exports = { userRouter };
