-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema sql9375420
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `id` INT(11) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `Username` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `First Name` VARCHAR(45) NULL,
  `Last Name` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Exercises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Exercises` (
  `id` INT(11) NOT NULL,
  `owner_id` INT(11) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `exercise_name` VARCHAR(45) NULL,
  `exercise_type` VARCHAR(45) NULL,
  `exercise_progress` INT(3) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Exercises_Users_idx` (`owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_Exercises_Users`
    FOREIGN KEY (`owner_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Following`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Following` (
  `id` INT(11) NOT NULL,
  `id_of_follower` INT(11) NOT NULL,
  `id_of_following` INT(11) NOT NULL,
  `request_approved` TINYINT(1) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Following_Users1_idx` (`id_of_follower` ASC) VISIBLE,
  CONSTRAINT `fk_Following_Users1`
    FOREIGN KEY (`id_of_follower`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Likes` (
  `id` INT(11) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `owner_id` INT(11) NOT NULL,
  `exercise_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Likes_Users1_idx` (`owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_Likes_Users1`
    FOREIGN KEY (`owner_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;