const { createApp } = require('../../../app');
const { AppDataSource } = require('../../models/data-source');
const { agrees } = require('../data/agrees');
const { categories } = require('../data/categories');
const { itemImages } = require('../data/itemImages');
const { items } = require('../data/items');
const { users } = require('../data/users');
const { createAgree } = require('../fixtures/agreeFixture');
const { createCategories } = require('../fixtures/categoryFixture');
const { createItems } = require('../fixtures/itemFixture');
const { createItemImages } = require('../fixtures/itemImageFixture');
const { createUsers } = require('../fixtures/userFixture');
const { truncateTables } = require('../testClient');
request = require('supertest');

describe('detail', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
    await createAgree(agrees);
    await createCategories(categories);
    await createUsers(users);
    await createItems(items);
    await createItemImages(itemImages);
  });

  afterAll(async () => {
    await truncateTables(['users', 'items', 'categories', 'item_images']);
    await AppDataSource.destroy();
  });

  test('Success', async () => {
    const response = await request(app).get('/item/1');

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      data: {
        id: 1,
        nickname: '민민수수',
        title: '옷',
        itemCondition: 1,
        description: null,
        price: '100,000원',
        itemCount: 1,
        region: '서울 강남구',
        date: '방금전',
        image: [
          {
            imgUrl: 'aaaaaaaaaaaaaaa',
          },
          {
            imgUrl: 'ababab',
          },
          {
            imgUrl: '11111111111111111111',
          },
        ],
      },
    });
  });
});
