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

-- Aggregate Functions
-- SELECT MIN(Age) FROM Users;
-- SELECT MAX(Age) FROM Users;
-- SELECT COUNT(Age) FROM Users;
-- SELECT SUM(Age) FROM Users;
-- SELECT AVG(Age) FROM Users;

-- Return the group of people in same age 
SELECT Age, count(Id)
FROM Users
GROUP BY Age
ORDER BY Age ASC;

SELECT Age, max(Followers)
FROM Users
GROUP BY Age 
HAVING max(Followers) > 200
ORDER BY Age ASC;

-- SELECT *
-- FROM Users
-- LIMIT 2;

SELECT * 
FROM Users
WHERE Age>= 16 AND Followers >= 300
ORDER BY Followers ASC;

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

UPDATE Users
SET Followers = 569
WHERE Id = 4378;

UPDATE Users
SET Followers = 69
WHERE Username = "X_Man";

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Users;

DELETE FROM Users 
WHERE Username = "X_Man";

ALTER TABLE Users
ADD COLUMN City varchar(50) NOT NULL;

UPDATE Users 
SET City = "Tadepalligudem"
WHERE Id = 4378;

UPDATE Users 
SET City = "Eluru"
WHERE Id = 4377;

UPDATE Users 
SET City = "Vizag"
WHERE Id = 4291;

SELECT * FROM Users;

ALTER TABLE Users 
DROP COLUMN Following;

-- It will Renames our TABLE NAME
-- ALTER TABLE Users
-- RENAME TO UserData;

ALTER TABLE Users
CHANGE COLUMN Followers Subs INT DEFAULT 0;

ALTER TABLE Users 
MODIFY Subs INT DEFAULT 5;

DROP TABLE Posts;

SHOW TABLES;

TRUNCATE TABLE Users;

SELECT * FROM Users;

USE Kiet;

SHOW TABLES;

CREATE TABLE Teacher (
	Id INT NOT NULL,
    Name VARCHAR(50),
    Subject VARCHAR(10) UNIQUE,
    Salary INT DEFAULT 15000,
    PRIMARY KEY (Id)
);

INSERT INTO Teacher 
(Id , Name , Subject , Salary)
VALUES
(23 , "Murthy" , "Flutter", 35000),
(47, "Nikitha", "C", 30000),
(18, "Tarun", "DSA", 65000),
(9, "Rekha" , "JAVA", 50000);

SELECT * FROM Teacher;

SELECT Name , Salary FROM Teacher
WHERE Salary > 55000;

ALTER TABLE Teacher
CHANGE COLUMN Salary CTC INT;

UPDATE Teacher
SET CTC = CTC + (0.25) * CTC;
 
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Teacher
ADD COLUMN City VARCHAR(50) DEFAULT "Hyderabad";

ALTER TABLE Teacher
DROP COLUMN Id;
