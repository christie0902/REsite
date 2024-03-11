-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: re-mall
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

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
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_user_id_foreign` (`user_id`),
  CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cart_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(13,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cart_items_cart_id_product_id_unique` (`cart_id`,`product_id`),
  KEY `cart_items_product_id_foreign` (`product_id`),
  CONSTRAINT `cart_items_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cart_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `carts_user_id_unique` (`user_id`),
  CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `parent_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Apparel','Clothing and Apparel',NULL,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(2,'T-shirts','Comfortable and Stylish T-shirts',1,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(3,'Hoodies','Warm and Cozy Hoodies',1,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(4,'Jackets','Durable and Fashionable Jackets',1,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(5,'Accessories','Essential and Trendy Accessories',1,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(6,'Figures & Models','Collectible Figures and Models',NULL,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(7,'Action Figures','Articulated Action Figures',6,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(8,'Statues','Detailed Collectible Statues',6,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(9,'Gifts & Collectibles','Unique Gifts and Collectibles',NULL,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(10,'Limited Edition Items','Exclusive Limited Edition Merchandise',9,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(11,'Gift Sets','Perfect Gift Sets for Any Occasion',9,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(12,'Exclusive Merchandise','Exclusive Items Available Only Here',9,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(13,'Special Editions','Special Edition Products for Collectors',9,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(14,'Sale & Clearance','Discounted Items and Clearance Sales',NULL,'2024-03-10 15:04:54','2024-03-10 15:04:54'),(15,'New Arrivals','Recently Added Products and Latest Releases',NULL,'2024-03-10 15:04:54','2024-03-10 15:04:54');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discounts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `rate` decimal(5,2) NOT NULL,
  `type` varchar(67) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,10.00,'Percentage Off',NULL,NULL),(2,5.00,'Percentage Off',NULL,NULL),(3,20.00,'Percentage Off',NULL,NULL),(4,15.00,'Fixed Amount Off',NULL,NULL),(5,50.00,'Fixed Amount Off',NULL,NULL);
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_table`
--

DROP TABLE IF EXISTS `images_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images_table` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `url` varchar(2048) NOT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_table_product_id_foreign` (`product_id`),
  CONSTRAINT `images_table_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_table`
--

LOCK TABLES `images_table` WRITE;
/*!40000 ALTER TABLE `images_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `images_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventories`
--

DROP TABLE IF EXISTS `inventories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inventories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_variant_id` bigint(20) unsigned NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `last_stock_update` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inventories_product_variant_id_foreign` (`product_variant_id`),
  CONSTRAINT `inventories_product_variant_id_foreign` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventories`
--

LOCK TABLES `inventories` WRITE;
/*!40000 ALTER TABLE `inventories` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2024_03_10_135603_create_categories_table',1),(7,'2024_03_10_135724_create_orders_table',1),(8,'2024_03_10_135802_create_discounts_table',1),(9,'2024_03_10_140004_create_products_table',1),(10,'2024_03_10_140053_create_reviews_table',1),(11,'2024_03_10_140139_create_product_variants_table',1),(12,'2024_03_10_140210_create_inventories_table',1),(13,'2024_03_10_140241_create_product_performance_metrics_table',1),(14,'2024_03_10_140307_create_order_items_table',1),(15,'2024_03_10_142634_add_has_sizes_to_products_table',1),(16,'2024_03_10_142737_create_tags_table',1),(17,'2024_03_10_142819_create_product_tag_table',1),(18,'2024_03_10_143524_create_images_table',1),(19,'2024_03_10_144546_create_addresses_table',1),(20,'2024_03_10_144652_create_payment_methods_table',1),(21,'2024_03_10_144746_create_recently_viewed_products_table',1),(22,'2024_03_10_144841_create_wishlists_table',1),(23,'2024_03_10_145930_create_carts_table',1),(24,'2024_03_10_150130_create_cart_items_table',1),(25,'2024_03_10_150744_add_has_account_and_role_to_users_table',1),(26,'2024_03_10_152416_add_review_count_and_rating_to_products_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `product_variant_id` bigint(20) unsigned DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(13,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_order_id_foreign` (`order_id`),
  KEY `order_items_product_id_foreign` (`product_id`),
  KEY `order_items_product_variant_id_foreign` (`product_variant_id`),
  CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `order_items_product_variant_id_foreign` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `total_price` decimal(13,2) NOT NULL,
  `status` enum('pending','completed','cancelled','refunded') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `provider` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_methods_user_id_foreign` (`user_id`),
  CONSTRAINT `payment_methods_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_performance_metrics`
--

DROP TABLE IF EXISTS `product_performance_metrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_performance_metrics` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `date` date NOT NULL,
  `views` bigint(20) unsigned NOT NULL DEFAULT 0,
  `sales` bigint(20) unsigned NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_metrics_per_day` (`product_id`,`date`),
  CONSTRAINT `product_performance_metrics_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_performance_metrics`
--

LOCK TABLES `product_performance_metrics` WRITE;
/*!40000 ALTER TABLE `product_performance_metrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_performance_metrics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_tag`
--

DROP TABLE IF EXISTS `product_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_tag` (
  `product_id` bigint(20) unsigned NOT NULL,
  `tag_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`,`tag_id`),
  KEY `product_tag_tag_id_foreign` (`tag_id`),
  CONSTRAINT `product_tag_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_tag`
--

LOCK TABLES `product_tag` WRITE;
/*!40000 ALTER TABLE `product_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_variants`
--

DROP TABLE IF EXISTS `product_variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_variants` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `sku` varchar(255) NOT NULL,
  `variant_type` varchar(255) NOT NULL,
  `variant_value` varchar(255) NOT NULL,
  `price` decimal(13,2) DEFAULT NULL,
  `stock_quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_variants_sku_unique` (`sku`),
  KEY `product_variants_product_id_foreign` (`product_id`),
  CONSTRAINT `product_variants_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_variants`
--

LOCK TABLES `product_variants` WRITE;
/*!40000 ALTER TABLE `product_variants` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_variants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(13,2) NOT NULL,
  `hasSizes` tinyint(1) NOT NULL DEFAULT 0,
  `category_id` bigint(20) unsigned NOT NULL,
  `discount_id` bigint(20) unsigned DEFAULT NULL,
  `image_url` varchar(2048) DEFAULT NULL,
  `stock_quantity` int(11) NOT NULL DEFAULT 0,
  `sku` varchar(255) NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `promotion_start_date` datetime DEFAULT NULL,
  `promotion_end_date` datetime DEFAULT NULL,
  `weight` decimal(10,2) DEFAULT NULL,
  `dimensions` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive','discontinued') NOT NULL,
  `review_count` int(11) NOT NULL DEFAULT 0,
  `rating` decimal(3,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_sku_unique` (`sku`),
  KEY `products_category_id_foreign` (`category_id`),
  KEY `products_discount_id_foreign` (`discount_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Resident Evil 2 Classic T-Shirt','The usual, conventional t-shirt for everyday wear. Traditional, generous, boxy fit.',24.90,0,1,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096702/ReProduct/product1_l9yynt.png',100,'RE2CT001',0,NULL,NULL,0.50,'10x10x2','active',63,4.50,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(2,'Jill Valentine Action Figure','Highly detailed Jill Valentine figure from Resident Evil 3.',59.99,0,2,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096108/ReProduct/product2_li9edi.jpg',50,'JVAF002',1,NULL,NULL,1.20,'5x5x10','active',85,4.80,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(3,'Leon Kennedy Jacket Replica','A detailed replica of Leon Kennedy\'s iconic jacket from Resident Evil 4.',120.00,0,1,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096694/ReProduct/product3a_liwxxp.png',30,'LKJR003',1,NULL,NULL,2.00,'15x10x4','active',40,4.70,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(4,'Umbrella Corporation Mug','Start your morning right with this Umbrella Corp branded mug.',15.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096694/ReProduct/product4_blwkxh.png',200,'UCM004',0,NULL,NULL,0.40,'4x4x6','active',120,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(5,'Raccoon City Police Department T-Shirt','Official RPD logo T-shirt, made from 100% cotton for comfort and durability.',29.99,0,1,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096696/ReProduct/product5_tea77m.png',150,'RCPD005',1,NULL,NULL,0.30,'10x8x1','active',75,4.80,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(6,'Nemesis Statue - Limited Edition','Exquisitely detailed statue of Nemesis from Resident Evil 3, a must-have for collectors.',199.99,0,2,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096112/ReProduct/product6_wkuayv.jpg',20,'NSLE006',1,NULL,NULL,3.50,'12x12x24','active',30,5.00,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(7,'Zombie Survival Kit','Everything you need to survive a night in Raccoon City, including first aid and tactical gear.',89.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096114/ReProduct/product7_xgo1qx.png',50,'ZSK007',0,NULL,NULL,2.00,'18x12x8','active',20,4.60,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(8,'Biohazard Warning Tape','Decorate your room or set up your own quarantine zone with this biohazard warning tape.',9.99,0,4,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096114/ReProduct/product8_h2kpdu.jpg',500,'BWT008',0,NULL,NULL,0.20,'4x4x2','active',150,4.30,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(9,'Mr. X Plushie','A cuddly, less terrifying version of the infamous Mr. X, perfect for fans of all ages.',25.99,0,5,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096115/ReProduct/product9_o2tlyj.jpg',100,'MXP009',1,NULL,NULL,0.50,'8x8x10','active',10,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(10,'Resident Evil Village Artbook','Explore the art and making of Resident Evil Village with this exclusive artbook.',45.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096115/ReProduct/product10_v1yzsr.png',60,'REVAB010',0,NULL,NULL,1.20,'11x8x0.5','active',44,4.80,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(11,'Chris Redfield Action Figure','A meticulously detailed action figure of Chris Redfield, complete with weaponry.',55.00,0,2,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096115/ReProduct/product11_l8swqg.png',35,'CRF011',1,NULL,NULL,1.50,'5x3x10','active',25,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(12,'Umbrella Corporation Hoodie','Keep warm with this Umbrella Corporation logo hoodie, available in various sizes.',49.99,0,1,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096698/ReProduct/product12_kjixy5.png',80,'UCH012',0,NULL,NULL,0.90,'12x10x1','active',95,4.70,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(13,'Licker Plush Toy','A surprisingly cute plush toy version of the fearsome Licker.',29.99,0,5,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096700/ReProduct/product13_yjbuzn.png',100,'LPT013',1,NULL,NULL,0.50,'8x6x5','active',67,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(14,'Spencer Mansion Blueprint Poster','A detailed blueprint poster of the iconic Spencer Mansion. Perfect for any fan\'s wall.',19.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product14_vvneg1.jpg',150,'SMBP014',0,NULL,NULL,0.20,'24x36','active',120,4.50,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(15,'RE4 Leon Kennedy Figure','Collectible figure of Leon S. Kennedy from Resident Evil 4 with detailed accessories.',75.00,0,2,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product15_rxnfpx.png',40,'LKRE415',1,NULL,NULL,1.80,'7x3x12','active',50,5.00,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(16,'Resident Evil STARS Badge Replica','A high-quality replica of the STARS badge from the Resident Evil series.',34.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product16_nlg7l1.jpg',75,'REB016',0,NULL,NULL,0.10,'3x3x0.2','active',32,4.80,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(17,'Resident Evil 3 Remake Strategy Guide','The ultimate guide for surviving Raccoon City in the Resident Evil 3 remake.',22.99,0,5,1,'https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product17_vn467y.jpg',120,'RE3SG017',0,NULL,NULL,1.10,'11x8.5x0.5','active',85,4.60,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(18,'T-Virus and Anti-Virus Prop Replica Set','Detailed replica set of the T-Virus and Anti-Virus vials from the series.',129.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product18_qbbv0l.jpg',30,'TVAV018',1,NULL,NULL,0.80,'6x3x3','active',47,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(19,'Resident Evil Save Room Candle','Immerse yourself with the scent of safety with this Save Room-themed candle.',16.99,0,4,2,'https://res.cloudinary.com/diwszstai/image/upload/v1710096104/ReProduct/product19_ovd7ua.png',200,'SRSC019',0,NULL,NULL,0.50,'3x3x3','active',73,4.40,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(20,'Ada Wong Cosplay Set','Complete Ada Wong cosplay set, perfect for conventions and Halloween.',180.99,0,1,1,'https://res.cloudinary.com/diwszstai/image/upload/v1710096105/ReProduct/product20a_c49alv.jpg',15,'AWCS020',1,NULL,NULL,2.50,'20x14x4','active',10,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(21,'Zombie Outbreak Response Team Decal','Show your readiness for any outbreak with this durable car decal.',7.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096105/ReProduct/product21_volo2h.jpg',300,'ZORTD021',0,NULL,NULL,0.10,'5x5','active',150,4.70,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(22,'Herb Healing Tea Blend','Enjoy a soothing blend of green, red, and blue herbs with this tea. Not actually medicinal.',12.99,0,5,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096105/ReProduct/product22_tv3cln.jpg',100,'HHTB022',1,NULL,NULL,0.20,'8x6x1','active',67,4.50,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(23,'Umbrella Corp Desk Organizer','Keep your desk tidy with an Umbrella Corporation-themed organizer.',22.50,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096106/ReProduct/product23_cc483f.jpg',85,'UCDO023',0,NULL,NULL,1.00,'12x8x5','active',32,4.80,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(24,'Raccoon City Historical Society Mug','A mug featuring historical landmarks of Raccoon City. Pre-outbreak, of course.',14.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096106/ReProduct/product24_wcuv7a.jpg',200,'RCHSM024',0,NULL,NULL,0.40,'4x4x6','active',85,4.60,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(25,'Biohazard Containment Unit USB Drive','Secure your data with this USB drive, designed as a miniature biohazard containment unit.',29.99,0,5,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710096107/ReProduct/product25_hlscbz.jpg',120,'BCUUD025',1,NULL,NULL,0.10,'2x2x2','active',48,5.00,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(26,'Tyrant T-002 Model Kit','Build your own Tyrant T-002 with this detailed model kit. Paint and glue not included.',49.99,0,2,1,'https://res.cloudinary.com/diwszstai/image/upload/v1710107137/ReProduct/product26_anl4u7.jpg',40,'TTMK026',0,NULL,NULL,1.50,'10x6x4','active',22,4.90,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(27,'Resident Evil Soundtrack Vinyl','The original soundtrack of Resident Evil on vinyl. A must-have for audiophiles and fans alike.',35.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710107137/ReProduct/product27_kjdxfo.jpg',75,'RESV027',1,NULL,NULL,0.80,'12x12x1','active',55,4.70,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(28,'Resident Evil 7 Baker Family Dinner Set','Experience dining with the Bakers with this themed dinner set. Not for the faint of heart.',99.99,0,3,NULL,'https://res.cloudinary.com/diwszstai/image/upload/v1710107138/ReProduct/product29_ebbg4h.jpg',25,'REBFDS028',0,NULL,NULL,3.00,'24x12x12','active',18,4.80,'2024-03-10 17:11:18','2024-03-10 17:11:18'),(29,'RE2 Remake Raccoon City Map Poster','Navigate Raccoon City with this detailed map poster, featuring key locations from RE2 Remake.',17.99,0,4,3,'https://res.cloudinary.com/diwszstai/image/upload/v1710107137/ReProduct/product28_jkloay.jpg',150,'RCMP029',0,NULL,NULL,0.25,'18x24','active',100,4.60,'2024-03-10 17:11:18','2024-03-10 17:11:18');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recently_viewed_products`
--

DROP TABLE IF EXISTS `recently_viewed_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recently_viewed_products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `viewed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recently_viewed_products_user_id_product_id_unique` (`user_id`,`product_id`),
  KEY `recently_viewed_products_product_id_foreign` (`product_id`),
  CONSTRAINT `recently_viewed_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `recently_viewed_products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recently_viewed_products`
--

LOCK TABLES `recently_viewed_products` WRITE;
/*!40000 ALTER TABLE `recently_viewed_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `recently_viewed_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `product_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `comment` text DEFAULT NULL,
  `rating` tinyint(3) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `reviews_product_id_foreign` (`product_id`),
  KEY `reviews_user_id_foreign` (`user_id`),
  CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `has_account` tinyint(1) NOT NULL DEFAULT 0,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wishlists` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wishlists_user_id_product_id_unique` (`user_id`,`product_id`),
  KEY `wishlists_product_id_foreign` (`product_id`),
  CONSTRAINT `wishlists_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `wishlists_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-11 10:51:21
