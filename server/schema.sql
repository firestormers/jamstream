-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jamstream
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jamstream
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jamstream` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jamstream` ;

-- -----------------------------------------------------
-- Table `jamstream`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jamstream`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jamstream`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jamstream`.`songs` (
  `idsongs` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `artist` VARCHAR(45) NOT NULL,
  `audio` VARCHAR(255) NOT NULL,
  `created_at` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idsongs`, `user_iduser`),
  INDEX `fk_songs_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_songs_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `jamstream`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
