DROP DATABASE IF EXISTS housesdatabase;
CREATE DATABASE housesdatabase;

USE housesdatabase;

DROP table houses;

CREATE TABLE houses(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  url_pathway VARCHAR (300),
  caption VARCHAR (300),
  verified BOOLEAN

);