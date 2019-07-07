CREATE DATABASE ice_cream_DB;
USE ice_cream_DB;

CREATE TABLE ice_creams
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);