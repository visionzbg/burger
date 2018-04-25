CREATE DATABASE burgers_db;

-- Switch to or use the `burgers_db`.
USE burgers_db;

-- Create a `burgers` table
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
	devoured BOOL DEFAULT false,
	PRIMARY KEY (id)
);