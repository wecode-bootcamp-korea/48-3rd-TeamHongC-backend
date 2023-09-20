const userService = require("../services/userService");
const { catchAsync } = require("../utils/error");

const kakaoSign = catchAsync(async (req, res) => {
  const accessToken = req.headers.authorization;
  const getAccessToken = await userService.kakaoSign(accessToken);
  res.status(200).json({ accessToken: getAccessToken });
});

module.exports = { kakaoSign };
