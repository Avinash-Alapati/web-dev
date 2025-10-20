-- SHOW TABLES;

-- INSERT INTO temp 
-- VALUES
-- (123);

USE Avinash_app;

CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(25) UNIQUE,
    email VARCHAR(60) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE fakeusers (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(25) UNIQUE,
    email VARCHAR(60) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);