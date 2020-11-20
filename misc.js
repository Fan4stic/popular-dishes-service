const faker = require('faker');
const Api = require('./db/api');

// console.log(faker.image.food());
const func = async () => {
  const result = await Api.db.customQuery('SELECT * FROM reviews WHERE item_id = 69;');
  console.log(result);
};

func();