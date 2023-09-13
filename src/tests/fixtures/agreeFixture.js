const { AppDataSource } = require('../../models/data-source');

const createAgree = (agreeList) => {
  let data = [];

  for (agree of agreeList) {
    data.push([agree.terms_service]);
  }

  return AppDataSource.query(
    `INSERT INTO agrees(
            terms_service
        ) VALUES ?`,
    [data]
  );
};

module.exports = { createAgree };
