const faker = require('faker');

module.exports = [
  {
    rating: 3,
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
  },
  {
    rating: 2,
    date: '6/16/2020',
    review: faker.lorem.paragraph(),
    name: 'Lad Person',
    avatar: 'https://s3-media0.fl.yelpcdn.com/photo/sp3TPqsDYgtS_EWJTSpkZA/60s.jpg',
    friends: 4,
    ratings: 12
  },
  {
    rating: 5,
    date: '6/14/2020',
    review: faker.lorem.paragraph(),
    name: 'John Smith',
    avatar: 'https://s3-media0.fl.yelpcdn.com/photo/sp3TPqsDYgtS_EWJTSpkZA/60s.jpg',
    friends: 33,
    ratings: 9
  }
];