-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 
-- サーバのバージョン： 10.4.8-MariaDB
-- PHP のバージョン: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `user_audit`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `t_user_billing_info`
--

CREATE TABLE `t_user_billing_info` (
  `GAME_ID` int(11) NOT NULL,
  `BILLING_AMOUNT` int(11) NOT NULL,
  `BILLING_TIME` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- テーブルの構造 `t_user_login_info`
--

CREATE TABLE `t_user_login_info` (
  `GAME_ID` int(11) NOT NULL,
  `LOGIN_TIME` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `t_user_login_info`
--

INSERT INTO `t_user_login_info` (`GAME_ID`, `LOGIN_TIME`) VALUES
(1000000000, '2020-11-05 15:03:09'),
(1000000000, '2020-11-05 15:34:11'),
(1000000000, '2020-11-05 15:34:17'),
(1000000000, '2020-11-05 15:48:16'),
(1000000000, '2020-11-05 15:48:35'),
(1000000000, '2020-11-05 15:48:40'),
(1000000000, '2020-11-05 15:48:46'),
(1000000000, '2020-11-05 15:48:53'),
(1000000000, '2020-11-05 15:49:00'),
(1000000000, '2020-11-05 15:49:09'),
(1000000000, '2020-11-05 15:49:17'),
(1000000000, '2020-11-05 15:49:23'),
(1000000000, '2020-11-05 15:49:49'),
(1000000000, '2020-11-05 15:50:24'),
(1000000000, '2020-11-05 15:50:46'),
(1000000000, '2020-11-05 15:51:51'),
(1000000000, '2020-11-05 15:52:07'),
(1000000000, '2020-11-05 15:53:12'),
(1000000000, '2020-11-05 15:54:09'),
(1000000000, '2020-11-05 15:57:17'),
(1000000000, '2020-11-05 15:57:27'),
(1000000000, '2020-11-05 16:37:20'),
(1000000001, '2020-11-05 16:37:45'),
(1000000000, '2020-11-05 16:38:13'),
(1000000000, '2020-11-05 16:41:01'),
(1000000000, '2020-11-05 16:41:31'),
(1000000000, '2020-11-05 16:54:41'),
(1000000000, '2020-11-05 16:55:21'),
(1000000000, '2020-11-05 17:00:54'),
(1000000000, '2020-11-05 17:01:09'),
(1000000000, '2020-11-05 17:28:00'),
(1000000000, '2020-11-06 10:25:10'),
(1000000000, '2020-11-06 10:25:13'),
(1000000000, '2020-11-06 10:25:28'),
(1000000000, '2020-11-06 10:39:05'),
(1000000000, '2020-11-06 11:42:09'),
(1000000000, '2020-11-06 11:42:09'),
(1000000000, '2020-11-06 11:42:10'),
(1000000000, '2020-11-06 11:42:10'),
(1000000000, '2020-11-06 11:42:10'),
(1000000000, '2020-11-06 11:42:10'),
(1000000000, '2020-11-06 11:42:10'),
(1000000000, '2020-11-06 11:42:10'),
(1000000000, '2020-11-06 11:42:11'),
(1000000000, '2020-11-06 11:42:11'),
(1000000000, '2020-11-06 11:42:11'),
(1000000000, '2020-11-06 11:42:11'),
(1000000000, '2020-11-06 11:42:17'),
(1000000000, '2020-11-06 12:29:43');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
