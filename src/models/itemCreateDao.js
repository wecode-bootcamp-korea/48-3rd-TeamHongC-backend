const { AppDataSource } = require("./data-source");

const createItem = async (categoryId, itemDescription, itemCondition, title, price, itemCount, longitude, latitude, region, userId) => {
    try {
        const result = await AppDataSource.query(`
    INSERT INTO items (
        category_id,
        item_description,
        item_condition,
        title,
        price,
        item_count,
        longitude,
        latitude,
        region,
        user_id
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
        )`, 
        [categoryId, itemDescription, itemCondition, title, price, itemCount, longitude, latitude, region, userId]
        );
        return result.insertId;
    } catch (err) {
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode = 400;
        throw error;
    }
};

const createItemImages = async (itemId, imgUrl) => {
    try {
        const queries = imgUrl.map(url => 
            AppDataSource.query(`
                INSERT INTO item_images (
                    item_id, 
                    img_url
                ) VALUES (
                    ?, 
                    ?
                )
            `, [itemId, url])
        );
        
        await Promise.all(queries);
    } catch (err) {
        console.log(err);
        const error = new Error("dataSource error");
        error.statusCode = 400;
        throw error;
    }
};



module.exports = {
    createItem,
    createItemImages
};