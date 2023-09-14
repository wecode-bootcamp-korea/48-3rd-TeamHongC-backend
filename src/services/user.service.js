const userDao = require("../models/user.dao");
const kakaoAuth = require("../utils/kakaoauth");
const jwt = require("jsonwebtoken");

// const kakaoUrl = async () => {
//   const kakaoCode = await kakaoAuth.kakaoKey;
//   console.log(kakaoCode);
//   return kakaoCode;
// };

const kakaoSign = async (code) => {
  const tokenData = await kakaoAuth.getToken(code);
  console.log(tokenData);
  const { nickname, profileImage, email } = await kakaoAuth.getUserData(
    access_token
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
