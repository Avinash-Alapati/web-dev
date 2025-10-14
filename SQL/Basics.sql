CREATE DATABASE Kiet;

USE Kiet;

CREATE TABLE student (
	id INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(4377 , "Sai Jalluri", 20),
(4378 , "Avinash Alapati", 18),
(4379 , "Ashok Bommanaboina" , 21),
(4291 , "Mahi Vardhan Yadagani" , 19);

SELECT * FROM student;

CREATE DATABASE IF NOT EXISTS Kiet;

CREATE DATABASE IF NOT EXISTS Instagram;

USE Instagram;

SELECT * FROM Instagram;

DROP DATABASE IF EXISTS Instagram;

SHOW DATABASES;

USE Kiet;

SHOW TABLES;

CREATE DATABASE IF NOT EXISTS Instagram;

USE Instagram;

SHOW TABLES;

CREATE TABLE Users (
	Id INT,
    Username varchar(50),
    Email varchar(25),
    Followers INT,
    Following INT
);

SELECT * FROM Users;

DROP table Users;

CREATE TABLE Users (
	Id INT,
    Age INT,
    Username varchar(50) NOT NULL,
    Email varchar(25) UNIQUE,
    Followers INT DEFAULT 0,
    Following INT,
    CONSTRAINT CHECK (Age >= 16),
    PRIMARY KEY (Id)
);

INSERT INTO Users
(Id, Age, Username, Email, Followers, Following)
VALUES
(4378 , 18 , "Avinashh._.26", "avinash@yahoo.com", 409, 326),
(4377, 20, "rebal_sai", "7788sai123@gmail.com", 1124, 420),
(4379, 21, "X_Man", "ashokashu@gmail.com", 24, 14),
(4291 , 19, "urstruly_mahi", "mahivardhan@gmail.com", 365, 242);

SELECT Username , Email FROM Users;
SELECT * FROM Users;

SELECT * 
FROM Users
WHERE Age>= 16 AND Followers >= 300;

SELECT * 
FROM Users
WHERE Age BETWEEN 16 AND 19;

SELECT * 
FROM Users
WHERE Email NOT IN ("mahi@yahoo.com" , "saijalluri77@gmail.com", "avinash@yahoo.com");

CREATE TABLE Posts (
	Id INT,
    Content VARCHAR(1000),
    User_ID INT,
    PRIMARY KEY (Id),
    FOREIGN KEY (User_ID) REFERENCES Users (Id)
);

INSERT INTO Posts 
(Id , Content, User_ID)
VALUES
(1, "Hello World!", 4378),
(2, "SDE - 1 @ Google", 4378),
(3 , "Backend Engineer @ Hackerrank",4378),
(4, "Analyst @ Goldman Sachs",4378);

SELECT * FROM Posts;
