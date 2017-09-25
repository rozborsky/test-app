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


        function __destruct() {
            $this->pdo = null;
        }
    }
?>