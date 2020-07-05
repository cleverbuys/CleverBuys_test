--
-- Database: `cleverbuys_db`
--

CREATE DATABASE IF NOT EXISTS `cleverbuys_db`;
USE `cleverbuys_db`;


-- ENTITIES

--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`lat` numeric ,
	`lng` numeric ,
	`mail` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`password` varchar(130)  NOT NULL,
	`postCode` varchar(130)  NOT NULL,
	`roles` varchar(130)  NOT NULL,
	`state` varchar(130)  NOT NULL,
	`surname` varchar(130)  NOT NULL,
	`town` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `cleverbuys_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `cleverbuys_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `dealerbrands`
--

CREATE TABLE IF NOT EXISTS `dealerbrands` (
	`brandID` numeric  NOT NULL,
	`dealershipID` numeric  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `dealership`
--

CREATE TABLE IF NOT EXISTS `dealership` (
	`email` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`telephone` numeric ,
	`town` varchar(130)  NOT NULL,
	`website` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `state`
--

CREATE TABLE IF NOT EXISTS `state` (
	`name` varchar(130)  NOT NULL,
	`shortName` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m brands dealership - brands
ALTER TABLE `dealership` ADD COLUMN `brands` int(11)  REFERENCES brands(_id);


