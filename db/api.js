const db = require('./index');

class Api {
  constructor() {
    this.db = db;
  }

  getAll(table) {
    return this.db.customQuery(`SELECT * FROM ${table}`);
  }

  getById(table, id) {
    return this.db.customQuery(`SELECT * FROM ${table} where id=${id}`);
  }

  insert(table, data) {
    switch(table) {
      case 'restaurants':
        return this.db.customQuery('INSERT INTO restaurants(name) values(?)', [data.name]);
        break;
      case 'items':
        return this.db.customQuery('INSERT INTO items(name, picture, price, restaurant_id) values(?, ?, ?, ?)', [data.name, data.picture, data.price, data.restaurant_id]);
        break;
      case 'users':
        return this.db.customQuery('INSERT INTO users(name, picture, friends, ratings) values(?, ?, ?, ?)', [data.name, data.picture, data.friends, data.ratings]);
        break;
      case 'reviews':
        return this.db.customQuery('INSERT INTO reviews(rating, date, review, user_id, item_id) values(?, ?, ?, ?, ?)', [data.rating, data.date, data.review, data.user_id, data.item_id]);
        break;
    }
  }
}

module.exports = new Api();