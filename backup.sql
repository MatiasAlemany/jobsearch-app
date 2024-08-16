-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: jobfinder
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_requestedjobs`
--

DROP TABLE IF EXISTS `_requestedjobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_requestedjobs` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `_RequestedJobs_AB_unique` (`A`,`B`),
  KEY `_RequestedJobs_B_index` (`B`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_requestedjobs`
--

LOCK TABLES `_requestedjobs` WRITE;
/*!40000 ALTER TABLE `_requestedjobs` DISABLE KEYS */;
INSERT INTO `_requestedjobs` VALUES ('clyrl3sor000112lqyzn74c82','cly63v8lm0000yyobeqqk9qaa'),('clyx62a1e0001fnmuk25nruil','cly63v8lm0000yyobeqqk9qaa'),('clyx65r8p0003fnmuj14i32iq','cly63v8lm0000yyobeqqk9qaa'),('clyx6dac40005fnmuavgyt1u8','cly63v8lm0000yyobeqqk9qaa'),('clyx6gs400007fnmu5gkvjkac','cly63v8lm0000yyobeqqk9qaa'),('clyx6j2x70009fnmu6hysix91','cly63v8lm0000yyobeqqk9qaa'),('clyx6jpz8000bfnmupmbp0cgr','cly63v8lm0000yyobeqqk9qaa'),('clz037u23000110qrk9h2rd1o','cly63v8lm0000yyobeqqk9qaa'),('clz04pvah000310qru46l7wd7','cly63v8lm0000yyobeqqk9qaa'),('clz04q3w3000510qrl7k8bil2','cly63v8lm0000yyobeqqk9qaa'),('clz04qc8v000710qryp2ch066','cly63v8lm0000yyobeqqk9qaa'),('clz04qnlq000910qr7afcdmbs','cly63v8lm0000yyobeqqk9qaa');
/*!40000 ALTER TABLE `_requestedjobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `providerAccountId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` text COLLATE utf8mb4_unicode_ci,
  `access_token` text COLLATE utf8mb4_unicode_ci,
  `expires_at` int DEFAULT NULL,
  `token_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scope` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_token` text COLLATE utf8mb4_unicode_ci,
  `session_state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  KEY `Account_userId_idx` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('cly63v8m10002yyob8wpmdtkk','cly63v8lm0000yyobeqqk9qaa','oauth','google','102337832540381334506',NULL,'ya29.a0AXooCgvWWW52IoGmrfMx1cmrEDrqjv1lWWTdI5j3Wnf0vC0OWr1yb0j84mxQHKHkF1jKlsgTn0QyWdcEWEJ3e4wgap1D2v0r7fxmvU9YYXLdF8-QDX1BKfNUeIAy6a6vlHQgcE_dDoksDnWTX-Bv0Gnt7BcUihOn9AaCgYKAZkSARISFQHGX2MibqTS-Y0n2b60OfxPtoHW0w0169',1720030937,'Bearer','https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile','eyJhbGciOiJSUzI1NiIsImtpZCI6IjJhZjkwZTg3YmUxNDBjMjAwMzg4OThhNmVmYTExMjgzZGFiNjAzMWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MjE0MTYxMDg0MjEtaGNqNmxyZGlxbXN0ZmY1dGE3M2EwYWthdHZxOGNoOGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MjE0MTYxMDg0MjEtaGNqNmxyZGlxbXN0ZmY1dGE3M2EwYWthdHZxOGNoOGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIzMzc4MzI1NDAzODEzMzQ1MDYiLCJlbWFpbCI6Im1hdGlhc2FsZW1hbnkyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiUXlxU0YtVWRCRUFOMVZEWjJBMWNEQSIsIm5hbWUiOiJNYXRpYXMgQWxlbWFueSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJcG5Zd3VWS3hVVS1YQ1FIYmNwbTJzMkxHZlZMdDBPQ2p0RnBTUE5JWjRHZW9ZUDZBPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1hdGlhcyIsImZhbWlseV9uYW1lIjoiQWxlbWFueSIsImlhdCI6MTcyMDAyNzM2MSwiZXhwIjoxNzIwMDMwOTYxfQ.2zM7XpzLUzmtML9J-C5mUw5jIH5tZ1-Yo0KXpLjVjLg8m2jZ7qCK9ybX9TndPdNRmddMNW0SUDlY1cACMhouJfHMP_Hp0D9Of-WzX88F7QwI_aZAMeDTd-kefh9CD7uWopEjVSBOmThx-RPszb03eh-aOi0_3yoy7c4M-hdRHUzcZ1mD5XDayJ2y21Ybhm5OUtTi70-tG9E_Tm9o7eal62cXBIQHPjItePVwvBESmXQuXyeQfqCtd-IhYfvCPGjyZPqX2rtV2ZmSCiQf8tJkco4CGqOA71L1QGB3-bdC53XGIHJboHiQrssecy4kYM01FjF8iIDan5SzI2Kz_chcig',NULL),('clzps3vyv0002bmi3j82n5y0f','clzps3vwt0000bmi3ywt6gk7m','oauth','google','111873143376991060760',NULL,'ya29.a0AcM612w1xfu8DkdTsFVKU-vvGCEW3CABmfII2K55fpJ1FwCI4cPZoFXjPtKdhHCv6RG0QbSMs8VN1Lhb-sGhRgPX2rFLW-rsIx1c2wPIu2r0Z3-XwIr05Tjp4J17Yvu23n8mv-3CQBl8VWhOzM07M56Gt0ccMModsNVvaCgYKAUcSARASFQHGX2Mi07sU4emX8GDftc6I5_Ucbg0171',1723397291,'Bearer','openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile','eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MjE0MTYxMDg0MjEtaGNqNmxyZGlxbXN0ZmY1dGE3M2EwYWthdHZxOGNoOGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MjE0MTYxMDg0MjEtaGNqNmxyZGlxbXN0ZmY1dGE3M2EwYWthdHZxOGNoOGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE4NzMxNDMzNzY5OTEwNjA3NjAiLCJlbWFpbCI6Im1pY2FlbGFnZXJ6QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiUVhCNl9xRjZFUFdFOVg2Y1JiYUoyQSIsIm5hbWUiOiJtaWNhZWxhIGdlcnplbnN0ZWluIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pnMjdYc0lUZ0pTTFFJUzBDRl9tbmFfRDNKNDdHLUE2dFZSRHJrZW9QWnRIR2xFQT1zOTYtYyIsImdpdmVuX25hbWUiOiJtaWNhZWxhIiwiZmFtaWx5X25hbWUiOiJnZXJ6ZW5zdGVpbiIsImlhdCI6MTcyMzM5MzY5MiwiZXhwIjoxNzIzMzk3MjkyfQ.LgEyKf7eY5oLA7Zi44bPYYHS5VK-V6pcV2siHiniUSGuSnqxT13MPnGEYY1W1eJDFDBPdpaGRArsKHSfALIz6U_WNchGy8jxuLHwIEMi2-N9I11mS7yTXOOyW5Wj_6IwUdagebjkBfGIZbbtDq7csZA31akS2huPZP2oiPArPHotQ4uZnSSY-NDrAS8nN58rgIKlKClELaJOM6jp234pXKY4XX4GNheqtLtm2D6381gsC5Rqj7fFrIuuWop6ZfGeczNe93TDdxuA-6qjhw0svNscbubxfrP9zfMVaO40wXo3obMHDgWhjFn2XjDjMHKwLn19HeKFufu9_8NS76rP_g',NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` int DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Company_userId_idx` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('clyhkgplk0009lyndi7vnx9c8','Empresa1s',NULL,'','','aaaaaa','cly63v8lm0000yyobeqqk9qaa'),('clyli664a000lwjztsgvk6fsy','Empresa3',NULL,'','','aaaaaaaaaaaaaaaaa','cly63v8lm0000yyobeqqk9qaa'),('clylj0eaz000zwjztc815ynbs','Empresa22222',NULL,'','','Calle Nueva','cly63v8lm0000yyobeqqk9qaa'),('clyljlsb90011wjzt8tq16879','Matias Alemany',NULL,'','','Empresa2','cly63v8lm0000yyobeqqk9qaa'),('clyljnhr80013wjztdyxbniku','matias26',NULL,'','','Empresa2','cly63v8lm0000yyobeqqk9qaa'),('clylkp71p0017wjzt9oip7wa3','sssssssssss',NULL,'','','Empresa2','cly63v8lm0000yyobeqqk9qaa'),('clylkxlu40019wjztw8r7xclx','Empresa233',NULL,'','','Empresa2','cly63v8lm0000yyobeqqk9qaa'),('clylkz8nb001bwjztxrc18m87','Empresa1',NULL,'','','aaaaaa','cly63v8lm0000yyobeqqk9qaa'),('clyll09iu001dwjzt1ogqf8r3','Matias Alemany',NULL,'','','Calle Nueva','cly63v8lm0000yyobeqqk9qaa'),('clyll0mx8001fwjztx85nwli7','Empresa1',NULL,'','','13 Camden Street Lower','cly63v8lm0000yyobeqqk9qaa'),('clyll12kq001hwjztdf02temf','Empresa1',NULL,'','','aaaaaaa','cly63v8lm0000yyobeqqk9qaa'),('clyq0kj5b00011g36m64psn5z','EmpresaNumero1000',NULL,'','','holahola','cly63v8lm0000yyobeqqk9qaa'),('clyq4wvsl00015llcmph2clhv','Matias Alemany',NULL,'','','aaaaaaa','cly63v8lm0000yyobeqqk9qaa');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Experience_userId_idx` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES ('clyyneydk000j11bmluancabm','Fabilor E Hijos S.R.L.','Operario','2024-07-01','2024-08-11','cly63v8lm0000yyobeqqk9qaa'),('clyyo1gb0000l11bmp8ld2bbx','Romay Desarrollos','Operario','2024-09-11','2024-12-27','cly63v8lm0000yyobeqqk9qaa'),('clzps64sd0004bmi33br4824p','Fabilor E Hijos S.R.L.','Operario','2021-10-02','2024-02-02','clzps3vwt0000bmi3ywt6gk7m');
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `joboffer`
--

DROP TABLE IF EXISTS `joboffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `joboffer` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `workTime` enum('fullTime','partTime') COLLATE utf8mb4_unicode_ci NOT NULL,
  `contract` enum('indefinite','fixed','formation') COLLATE utf8mb4_unicode_ci NOT NULL,
  `province` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `JobOffer_companyId_idx` (`companyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joboffer`
--

LOCK TABLES `joboffer` WRITE;
/*!40000 ALTER TABLE `joboffer` DISABLE KEYS */;
INSERT INTO `joboffer` VALUES ('clyrl3sor000112lqyzn74c82','aaaaaaaaa','aaaaaaaaaaaaaaaaaaaaa','menos-de-12000','fullTime','indefinite','','clyhkgplk0009lyndi7vnx9c8'),('clyx62a1e0001fnmuk25nruil','aaaaaaaaaa','aaaaaaaaaaaaaaaaaa','menos-de-12000','partTime','indefinite','','clylkp71p0017wjzt9oip7wa3'),('clyx65r8p0003fnmuj14i32iq','aaaaaaaaaa','aaaaaaaaaaaa','menos-de-12000','fullTime','indefinite','','clylkp71p0017wjzt9oip7wa3'),('clyx6dac40005fnmuavgyt1u8','aaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaa','menos-de-12000','fullTime','indefinite','','clyhkgplk0009lyndi7vnx9c8'),('clyx6gs400007fnmu5gkvjkac','Empresa Vulnerada','Empresa Vulnerada','menos-de-12000','fullTime','indefinite','','clyhkgplk0009lyndi7vnx9c8'),('clyx6j2x70009fnmu6hysix91','Mi NUeva ofer','Mi nueva ofer','menos-de-12000','fullTime','indefinite','','clyhkgplk0009lyndi7vnx9c8'),('clyx6jpz8000bfnmupmbp0cgr','Empresa daun','mpresa daun','menos-de-12000','fullTime','indefinite','','clyhkgplk0009lyndi7vnx9c8'),('clz037u23000110qrk9h2rd1o','Programador Web','Bien pago','entre-16000-y-20000','partTime','formation','Córdoba','clyljnhr80013wjztdyxbniku'),('clz04pvah000310qru46l7wd7','Barrendero','Mal Pago','entre-12000-y-16000','partTime','fixed','Cantabria','clylj0eaz000zwjztc815ynbs'),('clz04q3w3000510qrl7k8bil2','Basurero','Bien Pago','entre-12000-y-16000','partTime','formation','Castellón','clyhkgplk0009lyndi7vnx9c8'),('clz04qc8v000710qryp2ch066','Puta','Bien Pago','entre-12000-y-16000','partTime','formation','Córdoba','clyll09iu001dwjzt1ogqf8r3'),('clz04qnlq000910qr7afcdmbs','Trola','Bien Pago','entre-16000-y-20000','partTime','formation','Ciudad Real','clyljnhr80013wjztdyxbniku'),('clz8okla600015etbkhcavg91','Programador BackEnd','Programador Java Experiencia 50 años','mas-de-20000','fullTime','indefinite','Málaga','clylkz8nb001bwjztxrc18m87');
/*!40000 ALTER TABLE `joboffer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sessionToken` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Session_sessionToken_key` (`sessionToken`),
  KEY `Session_userId_idx` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES ('clyhgwlyp0003xxwjbfjjzee6','4ea8c756-1235-45d7-9cb4-8eef498c24dc','cly63v8lm0000yyobeqqk9qaa','2024-08-10 16:12:45.743'),('clyhh39hs0001yi4wpvlber8n','48b5663f-9bff-474e-a778-bd010b99bb4c','cly63v8lm0000yyobeqqk9qaa','2024-08-10 16:17:56.169');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studies`
--

DROP TABLE IF EXISTS `studies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studies` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degreeName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degreeType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Studies_userId_idx` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studies`
--

LOCK TABLES `studies` WRITE;
/*!40000 ALTER TABLE `studies` DISABLE KEYS */;
INSERT INTO `studies` VALUES ('clyyovcqi000p11bmg7qwm19x','Bachiller','Primario','2024-07-01','2024-08-11','cly63v8lm0000yyobeqqk9qaa'),('clzps6lz30006bmi37hcobp9y','Bachiller','Primario','2015-02-03','2021-05-06','clzps3vwt0000bmi3ywt6gk7m');
/*!40000 ALTER TABLE `studies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emailVerified` datetime(3) DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `customName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customSecondName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `province` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('cly63v8lm0000yyobeqqk9qaa','Matias Alemany','matiasalemany2@gmail.com',NULL,'https://lh3.googleusercontent.com/a/ACg8ocIpnYwuVKxUU-XCQHbcpm2s2LGfVLt0OCjtFpSPNIZ4GeoYP6A=s96-c','11','2024-07-19','111','111','Cuenca'),('clzps3vwt0000bmi3ywt6gk7m','micaela gerzenstein','micaelagerz@gmail.com',NULL,'https://lh3.googleusercontent.com/a/ACg8ocJg27XsITgJSLQIS0CF_mna_D3J47G-A6tVRDrkeoPZtHGlEA=s96-c','asd','1997-07-06','Micaela','Gerzenstein','Ciudad Real');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificationtoken`
--

DROP TABLE IF EXISTS `verificationtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificationtoken` (
  `identifier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) NOT NULL,
  UNIQUE KEY `VerificationToken_token_key` (`token`),
  UNIQUE KEY `VerificationToken_identifier_token_key` (`identifier`,`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificationtoken`
--

LOCK TABLES `verificationtoken` WRITE;
/*!40000 ALTER TABLE `verificationtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `verificationtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-14 16:57:34
