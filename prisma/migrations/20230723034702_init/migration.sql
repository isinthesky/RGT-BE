-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` VARCHAR(255) NOT NULL,
    `prodect_name` VARCHAR(255) NOT NULL,
    `options` VARCHAR(255) NULL,
    `table_no` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `order_date` VARCHAR(255) NOT NULL,
    `order_time` VARCHAR(255) NOT NULL,
    `date_time` VARCHAR(255) NOT NULL,
    `robot_status` VARCHAR(255) NULL,
    `dong` VARCHAR(255) NULL,
    `ho` VARCHAR(255) NULL,
    `seq` VARCHAR(255) NULL,
    `orderer_name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
