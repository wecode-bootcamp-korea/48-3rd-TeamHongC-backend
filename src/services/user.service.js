const userDao = require("../models/user.dao");
const kakaoAuth = require("../utils/kakaoauth");
const jwt = require("jsonwebtoken");

const kakaoSign = async (code) => {
  const getToken = await kakaoAuth.getToken(code);
  const { nickname, profileImage, email } = await kakaoAuth.getUserData(
    getToken
  );
  const userInfo = await userDao.getUserByEmail(email);

  if (!userInfo) {
    await userDao.createUser(nickname, profileImage, email);
    return jwt.sign(
      { id: userInfo.id, email: userInfo.email },
      process.env.JWT_SECRET
    );
  } else {
    return jwt.sign(
      { id: userInfo.id, email: userInfo.email },
      process.env.JWT_SECRET
    );
  }
};
module.exports = { kakaoSign };
