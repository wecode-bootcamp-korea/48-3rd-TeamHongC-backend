const getToken = async (code) => {
  const params = {
    client_id: this.Key,
    code,
    grant_type: "authorization_code",
    redirect_uri: this.redirectUri,
  };

  const { data } = await axios.post(
    "http://kauth.kakao.com/oauth/token",
    params,
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

const getUserData = async (token) => {
  const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Autorization: `Bearer ${token}`,
    },
  });

  const userData = {
    nickname: data.kakao_account.profile.nickname,
    profileImage: data.kakao_account.profile.profile_image_url,
    email: data.kakao_account.email,
  };

  return userData;
};

module.exports = { getToken, getUserData };
