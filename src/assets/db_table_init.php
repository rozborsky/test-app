<?php
    
    class DbTableInint {
        private $pdo;

        
        function __construct() {
            try {
                $this->pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);
                if(!$this->table_exists(TABLE_USERS)) {
                    $this->create_table_users(TABLE_USERS);                
                }    
                if(!$this->table_exists(TABLE_REPORTS)) {
                    $this->create_table_messages(TABLE_REPORTS);                
                }
            } catch (PDOException $e) {
                echo 'Сервіс недоступний';
            }
        }


        private function table_exists($table) {
            try {
                $result = $this->pdo->query("SELECT 1 FROM $table LIMIT 1");
            } catch (Exception $e) {
                return false;
            }

            return $result !== false;
        }  


        private function create_table_messages($table) {
            $this->pdo->exec("CREATE TABLE $table (
                `id`INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
                `host` VARCHAR(255) NOT NULL,
                `code` INT(10) UNSIGNED NOT NULL,
                `message` MEDIUMTEXT NOT NULL,
                `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`id`)
                )
                COLLATE='utf8_general_ci'
                ENGINE=InnoDB;");
        }


        private function create_table_users($table) {
            $this->pdo->exec("CREATE TABLE $table (
                `id_$table`INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
                `name` VARCHAR(50) NOT NULL,
                `secound_name` VARCHAR(50) NOT NULL,
                `login` VARCHAR(50) NOT NULL,
                `password` VARCHAR(100) NOT NULL,
                `registered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`id_$table`)
                )
                COLLATE='utf8_general_ci'
                ENGINE=InnoDB;");
        }

        function __destruct() {
            $this->pdo = null;
        }
    }
?>