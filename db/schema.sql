
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	ID INT AUTO_INCREMENT NOT NULL,
    Burger_name VARCHAR (50),
    Devoured BOOLEAN,
    PRIMARY KEY (ID)
);