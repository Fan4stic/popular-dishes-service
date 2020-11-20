const faker = require('faker');

module.exports = [
  {
    rating: 5,
    date: '6/21/2020',
    review: faker.lorem.paragraph(),
    name: 'Dean Hudson',
    avatar: 'https://s3-media0.fl.yelpcdn.com/photo/sp3TPqsDYgtS_EWJTSpkZA/60s.jpg',
    friends: 1,
    ratings: 42
  },
  {
    rating: 4,
    date: '6/19/2020',
    review: faker.lorem.paragraph(),
    name: 'Person Guy',
    avatar: 'https://s3-media0.fl.yelpcdn.com/photo/sp3TPqsDYgtS_EWJTSpkZA/60s.jpg',
    friends: 10,
    ratings: 32
  }
];