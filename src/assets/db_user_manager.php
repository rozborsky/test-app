<?php
    include 'dbParameters.php';
    
    class DbUserManager {
        private $pdo;
        private $tablename = 'users';

        
        function __construct() {
            try {
                $this->pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);            
            } catch (PDOException $e) {
                echo 'Сервіс недоступний';
            }
        }

        
        public function get_user() {
            $statement = $this->pdo->prepare("SELECT * FROM $this->tablename");
            $statement->execute();

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }


        public function add_user($name, $secound_name, $login, $password) {
            $statement = $this->pdo->prepare(
                "INSERT INTO $this->tablename (name, secound_name, login, password) 
                VALUES (:name, :secound_name, :login, :password)");
                $encryptedPassword = $this->encryptionString($password);
            $statement->execute([
                ':name'=> $name, ':secound_name'=> $secound_name, ':login'=> $login, ':password'=> $encryptedPassword
            ]);
        }


        private function encryptionString($string) {
            return password_hash($string, PASSWORD_BCRYPT);
        } 


        function __destruct() {
            $this->pdo = null;
        }
    }
?>