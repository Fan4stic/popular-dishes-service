const Api = require('./db/api');
const faker = require('faker');
const samplePics = require('./sample_pics');
const dateFormatter = require('./tools/date_formatter');

const randInt = (n, offset = 0) => Math.floor(Math.random() * n) + offset;
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const addDataToTable = async (table, data) => {
  try {
    const result = await Api.insert(table, data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const generateEntries = async function(N, table) {
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
          name: capitalizeFirstLetter(faker.lorem.word()),
          picture: samplePics[randInt(samplePics.length)],
          price: randInt(20, 5),
          restaurant_id: randInt(51)
        };
        break;
      case 'users':
        data = {
          name: faker.name.findName(),
          picture: 'https://i.pravatar.cc/100',
          friends: randInt(70),
          ratings: randInt(70)
        };
        break;
      case 'reviews':
        data = {
          rating: randInt(5, 1),
          date: dateFormatter(faker.date.past().toJSON().slice(0, 10)),
          review: faker.lorem.paragraph().slice(0, 200),
          user_id: randInt(51),
          item_id: randInt(501)
        };
        break;
    }
    await addDataToTable(table, data);
  }
};


generateEntries(50, 'restaurants').then(
  success => generateEntries(50, 'users')
).then(
  success => generateEntries(500, 'items')
).then(
  success => generateEntries(2000, 'reviews')
).then(
  success => Api.db.end()
);