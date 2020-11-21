const Api = require('./db/api');
const faker = require('faker');

const addDataToTable = async (table, data) => {
  try {
    const result = await Api.insert(table, data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const generateEntries = function(N, table) {
  for (let index = 0; index < N; index++) {
    let data;
    switch(table) {
      case 'restaurants':
        data = {
          name: faker.lorem.word()
        };
        break;
      case 'items':
        data = {
          name: faker.lorem.word(),
          picture: faker.image.food(),
          restaurant_id: Math.floor(Math.random() * 51)
        };
        break;
      case 'users':
        data = {
          name: faker.name.findName(),
          picture: 'https://i.pravatar.cc/100',
          friends: Math.floor(Math.random() * 70),
          ratings: Math.floor(Math.random() * 70)
        };
        break;
      case 'reviews':
        data = {
          rating: Math.floor(Math.random() * 6),
          date: faker.date.past().toJSON().slice(0, 10),
          review: faker.lorem.paragraph().slice(0, 200),
          user_id: Math.floor(Math.random() * 51),
          item_id: Math.floor(Math.random() * 501)
        };
        break;
    }
    addDataToTable(table, data);
  }
};

generateEntries(50, 'restaurants');
generateEntries(50, 'users');
generateEntries(500, 'items');
generateEntries(2000, 'reviews');

Api.db.end();