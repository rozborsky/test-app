<?php
    include 'dbParameters.php';
    include 'password_manager.php';
    
    class DbUserManager {
        private $pdo;

        
        function __construct() {
            try {
                $this->pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);            
            } catch (PDOException $e) {
                echo 'Сервіс недоступний';
            }
        }

        
        public function get_users() {
            $statement = $this->pdo->prepare("SELECT id, name, secound_name AS secoundName FROM ".TABLE_USERS);
            $statement->execute();

            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }


        public function add_user($name, $secound_name, $login, $password) {
            $passwordManager = new PasswordManager();
            $statement = $this->pdo->prepare(
                "INSERT INTO ".TABLE_USERS." (name, secound_name, login, password) 
                VALUES (:name, :secound_name, :login, :password)");
                $encryptedPassword = $passwordManager->encrypt($password);
            $statement->execute([
                ':name'=> $name, ':secound_name'=> $secound_name, ':login'=> $login, ':password'=> $encryptedPassword
            ]);
        }

        function __destruct() {
            $this->pdo = null;
        }
    }
?>