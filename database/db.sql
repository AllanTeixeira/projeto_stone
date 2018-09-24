-- Cria uma nova database
CREATE DATABASE Stone;

-- Usa a database
use Stone;

-- Cria uma nova tabela
CREATE TABLE funcionario (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  idade INT(6) NOT NULL,
  cargo VARCHAR(15) NOT NULL
);

-- Testa se a tabela foi mesmo criada
show tables;

-- Mostra os detalhes da tabela funcionário
describe funcionario;


