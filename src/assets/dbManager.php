<?php
    include 'dbParameters.php';

    class DbManager {
        private $pdo;

        
        function __construct() {
            try {
                $this->pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);
                if(!$this->table_exists(TABLENAME)) {
                    $this->create_table(TABLENAME);                
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


        private function create_table($table) {
            $this->pdo->exec("CREATE TABLE $table (
                `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
                `host` VARCHAR(255) NOT NULL,
                `code` INT(10) UNSIGNED NOT NULL,
                `message` MEDIUMTEXT NOT NULL,
                `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`id`)
                )
                COLLATE='utf8_general_ci'
                ENGINE=InnoDB;");
        }


        public function get_messages() {
            $statement = $this->pdo->prepare("SELECT * FROM reports");
            $statement->execute();

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }


        public function add_message($host, $code, $message) {
            $statement = $this->pdo->prepare("INSERT INTO reports (host, code, message) VALUES (:host, :code, :message)");
            $statement->execute([
                ':host'=> $host, ':code'=> $code, ':message'=> $message
            ]);
        }


        public function delete_message($id) {
            $statement = $this->pdo->prepare("DELETE FROM reports WHERE id = :id"); 
            $statement->execute([
                ':id' => $id
            ]);

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }


        public function update_message($id, $message) {
            $statement = $this->pdo->prepare("UPDATE reports SET message = :message WHERE id = :id");
            $statement->execute([
                ':id' => $id, ':message' => $message
            ]);

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>