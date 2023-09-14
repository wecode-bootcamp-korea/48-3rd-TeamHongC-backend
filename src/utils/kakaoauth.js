const axios = require("axios");

const getUserData = async (accessToken) => {
  const data = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `bearer ${accessToken}`,
    },
  });

  const userData = {
    nickname: data.data.properties.nickname,
    profileImage: data.data.properties.profile_image,
    email: data.data.kakao_account.email,
  };

  return userData;
};

module.exports = { getUserData };
