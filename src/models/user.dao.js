const { AppDataSource } = require("./data-source");

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
    SELECT
    id,
    email
    FROM
    users
    WHERE email = ?
    `,
    [email]
  );
  return user;
};
const createUser = async (nickname, profileImage, email) => {
  await AppDataSource.query(
    `
    INSERT INTO users(
      name,
      nickname,
      profile_image,
      email
      )
    VALUES (
      ?, ?, ?, ?
    );
    `,
    [nickname, nickname, profileImage, email]
  );
};

module.exports = { getUserByEmail, createUser };
