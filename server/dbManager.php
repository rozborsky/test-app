<?php
    include 'mySqlParameters.php';
    
    class DbManager
    { 
        const HOST = 'localhost';
        const DATABASE = 'test';
        const USER = 'admin';
        const PASSWORD = 'password';
        const TABLENAME = 'reports';
        
        var $pdo;
        
        function __construct() {
            try {
                $this->pdo = $this->connect_to_db();
                if(!$this->table_exists($this->pdo, self::TABLENAME)) {
                    $this->create_table($this->pdo, self::TABLENAME);                
                }
            } catch (PDOException $e) {
                echo 'Сервіс недоступний';
            } 
        }
   
        private function connect_to_db() {
            $this->pdo = new PDO('mysql:dbname=test;host='.self::HOST, self::USER, self::PASSWORD);
            return $this->pdo;
        }
        
        private function table_exists($pdo, $table) {
            try {
                $result = $pdo->query("SELECT 1 FROM $table LIMIT 1");
            } catch (Exception $e) {
                return false;
            }

            return $result !== false;
        }  
        
        private function create_table($pdo, $table) {
            $pdo->exec("CREATE TABLE $table (
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
        
        public function add_message($host, $code, $message) {
            $statement = $this->pdo->prepare("INSERT INTO reports (host, code, message) VALUES (:somevalue, :1, :message)");
            $statement->execute([
                ':somevalue'=> $host, ':1'=> $code, ':message'=> $message]) or die(print_r($this->pdo->errorInfo(), true));
        }
        
        public function get_messages() {
                $sth = $this->pdo->prepare("SELECT * FROM reports");
                $sth->execute();
                return $sth->fetchAll(PDO::FETCH_BOTH );
        }
        
        
        public function get_message($id) {
            $sth = $this->pdo->prepare("SELECT * FROM reports WHERE id = :id LIMIT 1");
            $sth->execute([
                ':id' => $id
            ]);
            return $sth->fetch();
        }
        
        public function update_message($id) {
            $sth = $this->pdo->prepare("SELECT * FROM reports WHERE id = :id'");
            $sth->execute([
                ':id' => $id
            ]);
            return $sth->fetchAll(PDO::FETCH_BOTH );
        }
        
        public function delete_message($id) {
            $sth = $this->pdo->prepare("SELECT * FROM reports WHERE id = :id'");
            $sth->execute([
                ':id' => $id
            ]);
            return $sth->fetchAll(PDO::FETCH_BOTH );
        }
        
    }
?>