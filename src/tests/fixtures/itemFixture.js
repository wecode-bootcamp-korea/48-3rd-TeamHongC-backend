const { AppDataSource } = require('../../models/data-source');

const { AppDataSource } = require("../../src/models/data-source");

const createItems = (itemList) => {
    let data = [];

    for (const items of itemList) {
        data.push([
            items.categoryId, 
            items.itemDescription, 
            items.itemCondition, 
            items.title,
            items.price,
            items.itemCount,
            items.location,
            items.userId
            ]);
    };

    return AppDataSource.query(
        `
        INSERT INTO items (
            category_id,
            item_description,
            item_condition,
            title,
            price,
            item_count,
            location,
            user_id
        ) VALUES ?
        `, [ data ]
    )
};

module.exports = { createItems };
