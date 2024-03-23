const { AppDataSource } = require("./data-source");

const getAllItems = async (x, y, condition, categoryId, userId) => {
  try {
    let conditionFilter = "1=1";
    let categoryFilter = "1=1";

    if (condition && condition !== "all") {
      const conditionClause = await getConditionFilter(condition);
      if (conditionClause) {
        conditionFilter = conditionClause;
      }
    }

    if (categoryId && categoryId !== "all") {
      const categoryClause = await getCategoryFilter(categoryId);
      if (categoryClause) {
        categoryFilter = categoryClause;
      }
    }

    const result = await AppDataSource.query(`
        SELECT 
        i.id AS itemId,
        i.category_id AS categoryId,
        c.name AS categoryName,
        i.item_condition AS itemCondition,
        i.user_id AS userId,
        i.item_description AS itemDescription,
        i.title,
        i.item_count AS itemCount,
        i.region,
        CONCAT(FORMAT(i.price, 0)) AS price,
        COUNT(DISTINCT l.id) AS likeCount,
        COUNT(DISTINCT reviews.id) AS reviewCount,
        CASE
            WHEN likes.user_id IS NOT NULL THEN 1
            ELSE 0
        END AS liked,
        (6371 * acos(cos(radians(${x})) * 
        cos(radians(longitude))*cos(radians(latitude)
        -radians(${y}))+sin(radians(${x}))*sin(radians(latitude))))
        AS distance,
        GROUP_CONCAT(ii.img_url) AS imgUrl
        FROM items i
        LEFT JOIN likes l ON i.id = l.item_id
        LEFT JOIN likes ON i.id = likes.item_id AND likes.user_id = ${userId}
        LEFT JOIN reviews ON i.id = reviews.item_id
        LEFT JOIN categories c ON i.category_id = c.id
        LEFT JOIN item_images ii ON i.id = ii.item_id
        WHERE ${conditionFilter} AND ${categoryFilter} AND i.item_count > 0
        GROUP BY i.id
        HAVING distance < 10000
        ORDER BY i.created_at DESC;
        `);
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error("dataSource error");
    error.statusCode = 400;

    throw error;
  }
};

const getConditionFilter = async (condition) => {
  if (!condition || condition === "all") {
    return "";
  } else if (condition === "new") {
    return "item_condition = 1";
  } else if (condition === "used") {
    return "item_condition = 0";
  }
};

const getCategoryFilter = async (category) => {
  if (!category || category === "all") {
    return "";
  } else {
    return `i.category_id = ${category}`;
  }
};

const getCategory = async () => {
  try {
    const result = await AppDataSource.query(`
        SELECT 
        id,
        name
        FROM categories;
        `);
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error("dataSource error");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getAllItems,
  getConditionFilter,
  getCategoryFilter,
  getCategory,
};
