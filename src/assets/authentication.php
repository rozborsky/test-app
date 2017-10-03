<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
     
    include 'authentication_manager.php';

    $authenticationManager = new AuthenticationManager();
    $loginData = json_decode(file_get_contents('php://input'), true);
    echo json_encode($authenticationManager->signIn($loginData['login'], $loginData['password']));     
?>