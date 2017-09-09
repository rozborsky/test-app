<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

    include 'dbParameters.php';

    $pdo;
    
    try {
        $pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);
        if(!table_exists($pdo, TABLENAME)) {
            create_table($pdo, TABLENAME);                
        }   
    } catch (PDOException $e) {
        echo 'Сервіс недоступний';
    }


    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo json_encode(get_messages($pdo));

    } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        $message = json_decode(file_get_contents('php://input'), true);
        add_message($pdo, $message['host'], $message['code'], $message['message']);

    } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
        $message = json_decode(file_get_contents('php://input'), true);
        update_message($pdo, $message['id'], $message['message']);

    } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        $url_parts = explode ( '.php/', $_SERVER[ 'REQUEST_URI' ]);
        delete_message($pdo, $url_parts[1]);
    }


    function table_exists($pdo, $table) {
        try {
            $result = $pdo->query("SELECT 1 FROM $table LIMIT 1");
        } catch (Exception $e) {
            return false;
        }

        return $result !== false;
    }  


    function create_table($pdo, $table) {
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


    function get_messages($pdo) {
        $statement = $pdo->prepare("SELECT * FROM reports");
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_BOTH);
    }


    function add_message($pdo, $host, $code, $message) {
        $statement = $pdo->prepare("INSERT INTO reports (host, code, message) VALUES (:host, :code, :message)");
        $statement->execute([
            ':host'=> $host, ':code'=> $code, ':message'=> $message
        ]);
    }


    function delete_message($pdo, $id) {
        $statement = $pdo->prepare("DELETE FROM reports WHERE id = :id"); 
        $statement->execute([
            ':id' => $id
        ]);
    }


    function update_message($pdo, $id, $message) {
        $statement = $pdo->prepare("UPDATE reports SET message = :message WHERE id = :id");
        $statement->execute([
            ':id' => $id, ':message' => $message
        ]);
    }
?>