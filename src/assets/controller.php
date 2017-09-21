<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

    include 'dbManager.php';
    $dbManager = new DbManager();

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo json_encode($dbManager->get_messages());

    } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        $message = json_decode(file_get_contents('php://input'), true);
        $dbManager->add_message($message['host'], $message['code'], $message['message']);

    } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
        $message = json_decode(file_get_contents('php://input'), true);
        $dbManager->update_message($message['id'], $message['message']);

    } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        $url_parts = explode('.php/', $_SERVER['REQUEST_URI']);
        $dbManager->delete_message($url_parts[1]);
    }
?>