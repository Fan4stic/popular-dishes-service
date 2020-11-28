const Api = require('./db/api');
const faker = require('faker');

const randInt = (n) => Math.floor(Math.random() * n);
const photoUrl = (n) => {
  return `https://s3-us-west-1.amazonaws.com/fec.yelp/SamsFood/Imageye+-+Sushi+Sam_s+Edomata+-+Takeout+_+Delivery+-+4522+Photos+_+2320+Reviews+-+Sushi+Bars+-+218+E+3rd+Ave_+San+Mateo_+CA+-+Restaurant+Reviews+-+Phone+Number+-+Menu+-+Yelp/300s+(` + randInt(n) + `).jpg`;
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
          name: faker.lorem.word(),
          picture: photoUrl(15),
          price: (Math.floor(Math.random() * 20) + 5),
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