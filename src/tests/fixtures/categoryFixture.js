const { AppDataSource } = require('../../models/data-source');

const createCategories = (categoryList) => {
  let data = [];

  for (category of categoryList) {
    data.push([category.name]);
  }

  return AppDataSource.query(
    `INSERT INTO categories(
            name
        ) VALUES ?`,
    [data]
  );
};

module.exports = { createCategories };
