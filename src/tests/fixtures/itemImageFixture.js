const { AppDataSource } = require('../../models/data-source');

const createItemImages = (imageList) => {
  let data = [];
  for (image of imageList) {
    data.push([image.item_id, image.img_url]);
  }

  return AppDataSource.query(
    `INSERT INTO item_images(
        item_id,
        img_url
        ) VALUES ?`,
    [data]
  );
};

module.exports = { createItemImages };
