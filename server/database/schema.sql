-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema haniniAlik
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema haniniAlik
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `haniniAlik` DEFAULT CHARACTER SET utf8 ;
USE `haniniAlik` ;

-- -----------------------------------------------------
-- Table `haniniAlik`.`parent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `haniniAlik`.`parent` (
  `idparent` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `phone` INT NOT NULL,
  `codePin` INT NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idparent`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `haniniAlik`.`child`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `haniniAlik`.`child` (
  `idchild` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `hobbies` VARCHAR(255) NOT NULL,
  `educationLevel` VARCHAR(255) NOT NULL,
  `phone` INT NOT NULL,
  `gendre` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `school` VARCHAR(255) NOT NULL,
  `timeTable` VARCHAR(255) NOT NULL,
  `parent_idparent` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idchild`, `parent_idparent`),
  INDEX `fk_child_parent_idx` (`parent_idparent` ASC) VISIBLE,
  CONSTRAINT `fk_child_parent`
    FOREIGN KEY (`parent_idparent`)
    REFERENCES `haniniAlik`.`parent` (`idparent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `haniniAlik`.`todoList`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `haniniAlik`.`todoList` (
  `idtodoList` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(255) NOT NULL,
  `done` TINYINT NOT NULL,
  `child_idchild` VARCHAR(255) NOT NULL,
  `child_parent_idparent` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idtodoList`),
  INDEX `fk_todoList_child1_idx` (`child_idchild` ASC, `child_parent_idparent` ASC) VISIBLE,
  CONSTRAINT `fk_todoList_child1`
    FOREIGN KEY (`child_idchild` , `child_parent_idparent`)
    REFERENCES `haniniAlik`.`child` (`idchild` , `parent_idparent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `haniniAlik`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `haniniAlik`.`games` (
  `idgames` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idgames`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `haniniAlik`.`childGames`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `haniniAlik`.`childGames` (
  `idchildGames` INT NOT NULL AUTO_INCREMENT,
  `child_idchild` VARCHAR(255) NOT NULL,
  `child_parent_idparent` VARCHAR(255) NOT NULL,
  `games_idgames` INT NOT NULL,
  PRIMARY KEY (`idchildGames`),
  INDEX `fk_childGames_child1_idx` (`child_idchild` ASC, `child_parent_idparent` ASC) VISIBLE,
  INDEX `fk_childGames_games1_idx` (`games_idgames` ASC) VISIBLE,
  CONSTRAINT `fk_childGames_child1`
    FOREIGN KEY (`child_idchild` , `child_parent_idparent`)
    REFERENCES `haniniAlik`.`child` (`idchild` , `parent_idparent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_childGames_games1`
    FOREIGN KEY (`games_idgames`)
    REFERENCES `haniniAlik`.`games` (`idgames`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
