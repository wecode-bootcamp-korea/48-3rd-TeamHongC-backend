const express = require("express");

const userController = require("../controllers/user.controller");

const userRouter = express.Router();

// userRouter.get("/kakaosign", userController.kakaoUrl);
userRouter.post("/kakaologin", userController.kakaoSign);

module.exports = { userRouter };
