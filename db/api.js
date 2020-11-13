const db = require('./index');

class Api {
  constructor() {
    this.db = db;
  }

  getAll(table, callback) {
    this.db.customQuery(`SELECT * FROM ${table}`);
  }

  insert(table, data, callback) {
    switch(table) {
      case 'restaurants':
        return this.db.customQuery('INSERT INTO restaurants(name) values(?)', [data.name]);
        break;
      case 'items':
        return this.db.customQuery('INSERT INTO items(name, picture, restaurant_id) values(?, ?, ?)', [data.name, data.picture, data.restaurant_id]);
        break;
      case 'reviews':
        return this.db.customQuery('INSERT INTO reviews(username, user_friends, user_ratings, rating, date, review, restaurant_id, item_id) values(?, ?, ?, ?, ?, ?, ?, ?)', [data.username, data.user_friends, data.user_ratings, data.rating, data.date, data.review, data.restaurant_id, data.item_id]);
        break;
    }
  }
}

module.exports = new Api();