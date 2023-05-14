-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2023 at 05:18 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inshine`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `availablity_id` int(11) DEFAULT NULL,
  `subtotal` varchar(10) NOT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `user_id`, `service_id`, `location_id`, `availablity_id`, `subtotal`, `date`, `time`) VALUES
(1, 18, 1, 1, NULL, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `contact_message` text DEFAULT NULL,
  `contact_phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `contact_email`, `contact_message`, `contact_phone`) VALUES
(1, 'atul@gmail.com', 'need help', '7878554455');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `user_type` enum('admin','user') NOT NULL DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`user_id`, `name`, `mobile`, `email_id`, `password`, `user_type`, `created_at`) VALUES
(23, 'Atul', '9399125462', 'atulpatil22494@gmail.com', 'atul123', 'user', '2023-05-14 13:36:06'),
(24, 'Rahul', '9898567457', 'rahul@gmail.com', 'rahul123', 'user', '2023-05-14 14:09:10');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(50) NOT NULL,
  `service_price` varchar(30) NOT NULL,
  `service_description` text NOT NULL,
  `service_duration` varchar(10) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `service_price`, `service_description`, `service_duration`, `category_id`, `image`) VALUES
(1, 'DENTAL IMPLANTS', '1000', 'Successfully replacing teeth using implants is an extremely \'technique-sensitive\' process that requires great expertise.', '60', 1, 'https://thumbs.dreamstime.com/b/dental-implant-3d-rendering-79852852.jpg'),
(2, 'TEETH WHITENING', '', 'The teeth whitening procedure is professionally performed by the dentist', '30', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTNXtIwNsdxuHli9Z2cFeukod91t79iAF3w&usqp=CAU'),
(3, 'INVISIBLE BRACES', '4500', 'Invisible braces are created using the latest digital mapping and moulding technology.', '90', 1, 'https://www.dentzzdental.com/uploads/media/source/pSnsBR-invisibleBracesNew.jpg'),
(4, 'ACNE', '1500', 'The Derma Co. 2% Salicylic Acid Serum is a multitasking formulation that treats acne, unclogs pores, and prevents skin damage. ', '120', 2, 'https://images.thedermaco.com/static/acne-2.png?auto=compress&fm=webp?fit=scale-down&width=144&height=144'),
(5, 'OPEN PORES', '2999', 'Skin pores are nothing but the openings of pilosebaceous follicles, i.e., the sweat and oil glands in the skin. They can be a significant cosmetic concern', '45', 2, 'https://images.thedermaco.com/static/open-pores-2.png?auto=compress&fm=webp?fit=scale-down&width=144&height=144');

-- --------------------------------------------------------

--
-- Table structure for table `service_category`
--

CREATE TABLE `service_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `image` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_category`
--

INSERT INTO `service_category` (`category_id`, `category_name`, `image`) VALUES
(1, 'DENTAL ', 'data:image/jpeg;base64,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'),
(2, 'DERMA', 'data:image/jpeg;base64,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');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `cart_ibfk_3` (`location_id`),
  ADD KEY `availablity_id` (`availablity_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `service_category`
--
ALTER TABLE `service_category`
  ADD PRIMARY KEY (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `service_category`
--
ALTER TABLE `service_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  ADD CONSTRAINT `cart_ibfk_4` FOREIGN KEY (`availablity_id`) REFERENCES `service_availablity` (`availablity_id`),
  ADD CONSTRAINT `cart_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `register` (`user_id`);

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `service_category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
