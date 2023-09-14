const userDao = require("../models/user.dao");
const kakaoAuth = require("../utils/kakaoauth");
const jwt = require("jsonwebtoken");

const kakaoSign = async (accessToken) => {
  console.log(accessToken);
  const { nickname, profileImage, email } = await kakaoAuth.getUserData(
    accessToken
  );
  const userInfo = await userDao.getUserByEmail(email);
  if (!userInfo) {
    await userDao.createUser(nickname, profileImage, email);
    const userSerch = await userDao.getUserByEmail(email);
    return jwt.sign(
      { id: userSerch.id, email: userSerch.email },
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
