DROP DATABASE IF EXISTS YELP;
CREATE DATABASE YELP;
USE YELP;


CREATE TABLE restaurants (
  id int(16) AUTO_INCREMENT,
  name VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id int(16) AUTO_INCREMENT,
  name VARCHAR(50),
  picture VARCHAR(100),
  restaurant_id int(16),
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE users (
  id int(16) AUTO_INCREMENT,
  name VARCHAR(50),
  picture VARCHAR(100),
  friends int(16),
  ratings int(16),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int(16) AUTO_INCREMENT,
  rating int(16),
  date DATE,
  review VARCHAR(200),
  user_id int(16),
  item_id int(16),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);


/*
  mysql -u root < schema.sql
*/

