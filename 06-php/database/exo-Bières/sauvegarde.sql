-- MariaDB dump 10.19-11.1.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: firstBDD
-- ------------------------------------------------------
-- Server version	11.1.3-MariaDB-1:11.1.3+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `fk_userId` (`UserId`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES
(2,'Bonjour','2023-11-30 08:36:46',4),
(3,'mange du pain','2023-11-30 08:36:46',4),
(4,'Pizza time','2023-11-30 08:36:46',4),
(5,'salade niçoise ou rien','2023-11-30 08:36:46',4),
(6,'Vive les regex','2023-11-30 08:36:46',7),
(7,'JS logic','2023-11-30 08:36:46',7),
(8,'Coucou','2023-11-30 08:36:46',7),
(9,'Bonsoir','2023-11-30 08:36:46',10),
(10,'Je fais la loi !','2023-11-30 08:36:46',10),
(11,'Ne regarde pas derrière toi.','2023-11-30 08:36:46',10),
(12,'Connaissez vous les trois coquillages?','2023-11-30 08:36:46',10),
(13,'42','2023-11-30 08:36:46',10),
(14,'salut','2023-11-30 08:36:46',6),
(15,'mangez 5 fruits et légumes par jour','2023-11-30 08:36:46',6);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Maurice','mo@gmail.com','chausette',1,'2023-11-28 10:41:30'),
(4,'Cécilius','rome@gmail.com','salade',1,'2023-11-28 10:41:30'),
(5,'Alcédias','alc@gmail.com','asdepic',1,'2023-11-28 10:41:30'),
(6,'Florestan','flo@outlook.fr','restant',0,'2023-11-28 09:54:30'),
(7,'Elzemond','elze@laposte.net','banane',0,'2023-11-28 09:54:30'),
(8,'Dulmène','dudu@outlook.fr','banane',0,'2023-11-28 09:54:30'),
(9,'Ildéric','deric@gmail.com','inspecteur',1,'2023-11-28 10:41:30'),
(10,'Hypolite','polite@gmail.com','hippopotame',1,'2023-11-28 10:41:30'),
(11,'Guilmée','gui@gmail.com','guillemet',1,'2023-11-28 10:41:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-30  9:42:48
