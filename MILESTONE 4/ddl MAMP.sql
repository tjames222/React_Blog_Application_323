-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gcu
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gcu
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gcu` DEFAULT CHARACTER SET utf8 ;
USE `gcu` ;

-- -----------------------------------------------------
-- Table `gcu`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gcu`.`users` ;

CREATE TABLE IF NOT EXISTS `gcu`.`users` (
  `FirstName` VARCHAR(255) NULL DEFAULT NULL,
  `LastName` VARCHAR(255) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`Email`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gcu`.`posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gcu`.`posts` ;

CREATE TABLE IF NOT EXISTS `gcu`.`posts` (
  `ID` VARCHAR(255) NOT NULL,
  `Title` VARCHAR(255) NOT NULL,
  `Content` BLOB NOT NULL,
  `Created` DATETIME NOT NULL,
  `Updated` DATETIME NULL DEFAULT NULL,
  `Deleted` DATETIME NULL DEFAULT NULL,
  `Author` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `Author` (`Author` ASC) VISIBLE,
  CONSTRAINT `posts_ibfk_1`
    FOREIGN KEY (`Author`)
    REFERENCES `gcu`.`users` (`Email`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
