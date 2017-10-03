<?php
    include 'dbParameters.php';
    include 'password_manager.php';
    
    class AuthenticationManager {
        private $pdo;

        function __construct() {
            try {
                $this->pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);            
            } catch (PDOException $e) {
                echo 'Сервіс недоступний';
            }
        }

        public function signIn($login, $password) {
            if(!$this->isPasswordRight($login, $password)) {
                return array();
            }
            $statement = $this->pdo->prepare("SELECT id, login, name, secound_name FROM ".TABLE_USERS." WHERE login = '$login'");
            $statement->execute();

            return $statement->fetch(PDO::FETCH_ASSOC);
        }


        private function isPasswordRight($login, $password) {
            $statement = $this->pdo->prepare("SELECT * FROM ".TABLE_USERS." WHERE login = '".$login."'");
            $statement->execute();
            $result=$statement->fetch();
            $passwordManager = new PasswordManager();

            return $passwordManager->comparePasswords($password, $result['password']);
        }


        function __destruct() {
            $this->pdo = null;
        }
    }
?>