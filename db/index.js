const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'yelp_popular_dishes',
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('db connected');
  }
});

db.customQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
};

module.exports = db;
