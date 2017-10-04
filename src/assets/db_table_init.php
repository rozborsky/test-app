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
                if($this->is_empty_table(TABLE_REPORTS)) {
                    $this->fill_table_reports(TABLE_REPORTS);
                }
                if($this->is_empty_table(TABLE_USERS)) {
                    $this->fill_table_users(TABLE_USERS);
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
                `id`INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
                `name` VARCHAR(50) NOT NULL,
                `secound_name` VARCHAR(50) NOT NULL,
                `login` VARCHAR(50) NOT NULL,
                `password` VARCHAR(100) NOT NULL,
                `registered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`id`)
                )
                COLLATE='utf8_general_ci'
                ENGINE=InnoDB;");
        }


        private function is_empty_table($table) {
            $statement = $this->pdo->prepare("SELECT 1 from $table LIMIT 1");
            $statement->execute();     
             
            return $statement->rowCount() === 0;
        }
        

        private function fill_table_users($table) {
            $sql = "INSERT INTO $table (name, secound_name, login, password, registered) 
                VALUES 
                    ('nameOne', 'secoundNameOne', 'loginOne', '$2y$10$Xn9Ije4TshN9VoX3RhSmtu6ysgTqW0pcDolMmuyE2z.AxaIx4x8Eu', '2017-09-01 23:32:29'),
                    ('nameTwo', 'secoundNameTwo', 'loginTwo', '$2y$10$dd3DRuP.9CEv8qTLrzD2Suf0CEhJ4piYlq4FHyv7U7J/gMglN4weq', '2017-09-02 23:32:29')";
            try {
                $result = $this->pdo->query($sql);
            } catch (Exception $e) {
                return false;
            }
        }  

        
        private function fill_table_reports($table) {
            $sql = "INSERT INTO $table (host, code, message, created) 
                VALUES 
                    ('localhost', 1, 'message1', '2017-09-24 23:32:29'),
                    ('host', 2, 'message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1
                    message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1
                    message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1
                    message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1', '2017-10-24 23:32:29'),
                    ('localhost', 1, 'message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2
                    message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2
                    message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2
                    message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2message2
                    message2message2message2message2message2message2message2message2message2message2message2message2message2message2', '2017-11-24 23:32:29'),
                    ('host', 2, 'message3', '2017-12-24 23:32:29'),
                    ('localhost', 1, 'message4', '2017-13-24 23:32:29')";
            try {
                $result = $this->pdo->query($sql);
            } catch (Exception $e) {
                return false;
            }
        }


        function __destruct() {
            $this->pdo = null;
        }
    }
?>