-- to create a new database
CREATE DATABASE Stone;

-- to use database
use Stone;

-- creating a new table
CREATE TABLE funcionario (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  idade INT(6) NOT NULL,
  cargo VARCHAR(15) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe funcionario;


