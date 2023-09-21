const { AppDataSource } = require('../../models/data-source');

const createUsers = (userList) => {
  let data = [];
  for (user of userList) {
    data.push([
      user.name,
      user.email,
      user.password,
      user.nickname,
      user.phonenumber,
    ]);
  }

  return AppDataSource.query(
    `INSERT INTO users(
        name,
        email,
        password,
        nickname,
        phonenumber        
        ) VALUES ?`,
    [data]
  );
};

module.exports = { createUsers };
