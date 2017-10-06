<?php
    include 'dbParameters.php';
    
    class DbMessageManager {
        private $pdo;
        
        function __construct() {
            try {
                $this->pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);                
            } catch (PDOException $e) {
                echo 'Сервіс недоступний';
            }
        }


        public function get_messages() {
            $statement = $this->pdo->prepare("SELECT * FROM ".TABLE_REPORTS);
            $statement->execute();

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }


        public function add_message($host, $code, $message) {
            $statement = $this->pdo->prepare("INSERT INTO ".TABLE_REPORTS." (host, code, message) VALUES (:host, :code, :message)");
            $statement->execute([
                ':host'=> $host, ':code'=> $code, ':message'=> $message
            ]);
        }


        public function delete_message($id) {
            $statement = $this->pdo->prepare("DELETE FROM ".TABLE_REPORTS." WHERE id = :id"); 
            $statement->execute([
                ':id' => $id
            ]);

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }


        public function update_message($id, $message) {
            $statement = $this->pdo->prepare("UPDATE ".TABLE_REPORTS." SET message = :message WHERE id = :id");
            $statement->execute([
                ':id' => $id, ':message' => $message
            ]);

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>