const userService = require("../services/user.service");
const { catchAsync } = require("../utils/error");

// const kakaoUrl = catchAsync(async(req, res) => {
//   const kakaoUrl = await userService.kakaoUrl();
//   res.status(200).json({ url: kakaoUrl })
// });
const kakaoSign = catchAsync(async (req, res) => {
  const { code } = req.body;
  const accessToken = await userService.kakaoSign(code);
  res.status(200).json({ accessToken: accessToken });
});

module.exports = { kakaoSign };
