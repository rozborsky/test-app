<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

    include 'db_table_init.php';
    include 'db_message_manager.php';
    
    new DbTableInint();
    $dbMessageManager = new DbMessageManager();

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo json_encode($dbMessageManager->get_messages());

    } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        $message = json_decode(file_get_contents('php://input'), true);
        $dbMessageManager->add_message($message['host'], $message['code'], $message['message']);

    } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
        $message = json_decode(file_get_contents('php://input'), true);
        $dbMessageManager->update_message($message['id'], $message['message']);

    } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        $url_parts = explode('.php/', $_SERVER['REQUEST_URI']);
        $dbMessageManager->delete_message($url_parts[1]);
    }
?>