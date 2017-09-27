<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

    include 'db_user_manager.php';

    $dbUserManager = new DbUserManager();

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo json_encode($dbUserManager->get_user());

    } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        $user = json_decode(file_get_contents('php://input'), true);
        $dbUserManager->add_user($user['name'], $user['secoundName'], $user['login'], $user['password']);
    }
?>