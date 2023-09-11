const request = require('supertest');

const itemFixture = require('../fixtures/items-fixture');
const { createApp } = require('../../app');
const { AppDataSource } = require('../../src/models/data-source');

describe("new item", () => {
    let app;

    const kakaoItem = {
        categoryId : 1,
        itemDescription : "상세설명",
        itemCondition : 0,
        title : "새거제목",
        price : 2200,
        itemCount : 1,
        location : "x=123, y=321, adress=경기 광명시",
        userId : 1
    };

    const naverItem = {
        categoryId : 1,
        itemDescription : "상세하지않은설명",
        itemCondition : 0,
        title : "헌제목",
        price : 6200,
        itemCount : 1,
        location : "x=113, y=121, adress=경기 수원시",
        userId : 1
    };

    beforeAll(async () => {
        app = createApp();
        await AppDataSource.initialize();
        await itemFixture.createItems([kakaoItem, naverItem]);
    });

    afterAll(async () => {
        await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);
        await AppDataSource.query(`TRUNCATE items`);
        await AppDataSource.query(`ALTER TABLE items AUTO_INCREMENT = 1`);
        await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=1`);

        await AppDataSource.destroy();
    });

    test("SUCCESS : created item", async () => {
        const response = await request(app)
            .post("/item")
            .send({categoryId : 1, 
                itemDescription : "상세하지않은설명", 
                itemCondition : 0, 
                title : "헌제목", 
                price : 6200, 
                itemCount : 1, 
                location : "x=113, y=121, adress=경기 수원시", 
                userId : 1
                });        
            expect(response.body).toEqual(3);
            expect(response.statusCode).toEqual(200);
    });

    test.only("FAILED : userId does not exist", async () => {        
        const response = await request(app)
            .post("/item")
            .send({categoryId : 2,
                itemDescription : "상세하지않은설명",
                itemCondition : 0,
                title : "헌제목",
                price : 6200,
                itemCount : 1,
                location : "x=113, y=121, adress=경기 수원시",
                userId : 112
            })
            expect(response.statusCode).toEqual(400);
            expect(response.body.message).toEqual("dataSource error");
    });

    test("SUCCESS : Get All Items", async () => {
        const response = await request(app)
            .get("/item/all")
            expect(response.statusCode).toEqual(200);
            expect(response.body.length).toBeGreaterThan(2);
    });

    test("FAILED : Do not exceed 4", async () => {
        const response = await request(app)
        .get("/item/all")
        expect(response.body.length).not.toBeGreaterThan(4);        
    });
});