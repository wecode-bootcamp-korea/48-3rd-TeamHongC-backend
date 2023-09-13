const { AppDataSource } = require('../models/data-source');

const truncateTables = async (tableList) => {
  await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);

  for (let table of tableList) {
    await AppDataSource.query(`TRUNCATE TABLE ${table}`);
  }

  await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=1`);
};

module.exports = { truncateTables };
