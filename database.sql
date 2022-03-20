CREATE DATABASE IF NOT EXISTS crudnodemysql;

USE crudnodemysql;

CREATE TABLE IF NOT EXISTS customer(
    id int(11) UNSIGNED AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    address varchar(100) NOT NULL,
    phone varchar(15) NOT NULL,
    PRIMARY KEY(id)
);

SHOW TABLES;

DESCRIBE customer;