const axios = require("axios");

// const kakaoKey = async () => {
//   const restApi = preocess.env.KAKAO_KEY;
//   const redirectUri = `http://localhost:3000/callback/kakao`;

//   const kakoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApi}&redirect_uri=${redirectUri}&response_type=code;`;

//   console.log(kakaoUrl);

//   return kakaoUrl;
// };

const getToken = async (code) => {
  const data = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    {
      client_id: process.env.KAKAO_KEY,
      code,
      grant_type: "authorization_code",
      redirect_uri: `http://localhost:3000/callback-kakao`,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const tokenData = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
  };
  return tokenData;
};

const getUserData = async (access_token) => {
  const data = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Autorization: `Bearer ${access_token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  console.log(data);

  const userData = {
    nickname: data.kakao_account.profile.nickname,
    profileImage: data.kakao_account.profile.profile_image_url,
    email: data.kakao_account.email,
  };
  console.log(userData);
  return userData;
};

module.exports = { getToken, getUserData };
