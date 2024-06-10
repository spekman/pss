CREATE SCHEMA IF NOT EXISTS pss;
USE pss;

CREATE TABLE IF NOT EXISTS `pokemon` (
  `dexN` int,
  `pokeName` varchar(20),
  PRIMARY KEY (`dexN`)
);
CREATE TABLE IF NOT EXISTS `trainerPoke` (
  `pokeId` int auto_increment,
  `dexN` int,
  `pokeNick` varchar(20) null,
  PRIMARY KEY (`pokeId`),
  FOREIGN KEY (dexN) REFERENCES pokemon(dexN)
);
CREATE TABLE IF NOT EXISTS `box` (
  `boxIndex` int,
  `pokeId` int,
  FOREIGN KEY (pokeId) REFERENCES trainerPoke(pokeId)
);