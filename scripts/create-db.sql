CREATE DATABASE `GCU` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE GCU;

CREATE TABLE `Posts` (
  `ID` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Content` blob NOT NULL,
  `Created` datetime NOT NULL,
  `Updated` datetime DEFAULT NULL,
  `Deleted` datetime DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Author` (`Author`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`Author`) REFERENCES `Users` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Users` (
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
