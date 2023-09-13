const jwt = require("jsonwebtoken");

const { userDao } = require("../models/user.dao");

const loginRequired = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      const error = new Error("NEED_ACCESS_TOKEN");
      error.statusCode = 401;

      return res.status(error.statusCode).json({ message: error.message });
    }

    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET);
    const userId = payload.id;

    const user = await userDao.getUserById(userId);

    if (!user) {
      const error = new Error("USER_DOES_NOT_EXIST");
      error.statusCode = 404;

      return res.status(error.statusCode).json({ message: error.message });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log(err)
    const error = new Error("INVALID_ACCESS_TOKEN");
    error.statusCode = 401;

    return res.status(error.statusCode).json({ message: error.message });
  }
};
module.exports = { loginRequired };