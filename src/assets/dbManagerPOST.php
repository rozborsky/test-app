<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

    const HOST = 'localhost';
    const DATABASE = 'test';
    const USER = 'admin';
    const PASSWORD = 'password';
    const TABLENAME = 'reports';

    
    $message = json_decode(file_get_contents('php://input'), true);
    try {
        $pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);
    
        add_message($pdo, $message['host'], $message['code'], $message['message']);
    } catch (PDOException $e) {
        
        echo 'Сервіс недоступний';
    } 


    function add_message($pdo, $host, $code, $message) {
        $statement = $pdo->prepare("INSERT INTO reports (host, code, message) VALUES (:host, :code, :message)");
        $statement->execute([
            ':host'=> $host, ':code'=> $code, ':message'=> $message]);
    }
?>