/////////////////////////////////////////////////////////

const Api = require('./db/api');
const faker = require('faker');

/////////////////////////////////////////////////////////

const addDataToTable = async (table, data) => {
  try {
    const result = await Api.insert(table, data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////////////////////////////

// const generateEntries = function(N, table, data) {
//   for (let index = 0; index < N; index++) {
//     start(table, data)
//   }
// };

/////////////////////////////////////////////////////////

const dataRest = {
  name: 'burrito place'
};

const randomDataRest = {
  name: faker.lorem.word()
};

addDataToTable('restaurants', dataRest);

/////////////////////////////////////////////////////////

const dataItem = {
  name: 'burrito',
  picture: 'https://hackreactorpics.s3-us-west-1.amazonaws.com/tacos.jpg',
  restaurant_id: 1
};

const randomDataItem = {
  name: faker.lorem.word(),
  picture: 'https://hackreactorpics.s3-us-west-1.amazonaws.com/tacos.jpg',
  restaurant_id: Math.floor(Math.random() * 2 + 6)
};

addDataToTable('items', dataItem);

/////////////////////////////////////////////////////////

var currentDate = new Date().toJSON().slice(0, 10);

const dataReviews = {
  username: 'supbrowannachill',
  user_friends: 5,
  user_ratings: 3,
  rating: 5,
  date: currentDate,
  review: 'food was good',
  restaurant_id: 1,
  item_id: 1
};

const randomDataReviews = {
  username: faker.name.findName(),
  user_friends: Math.floor(Math.random() * 70),
  user_ratings: Math.floor(Math.random() * 70),
  rating: Math.floor(Math.random() * 6),
  date: currentDate,
  review: faker.lorem.words(),
  restaurant_id: 6,
  item_id: 3
};

addDataToTable('reviews', dataReviews);

/////////////////////////////////////////////////////////

Api.db.end();

/////////////////////////////////////////////////////////