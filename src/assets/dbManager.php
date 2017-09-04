<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");

    const HOST = 'localhost';
    const DATABASE = 'test';
    const USER = 'admin';
    const PASSWORD = 'password';
    const TABLENAME = 'reports';

    $pdo;

    try {
        $pdo = new PDO('mysql:dbname=test;host='.HOST, USER, PASSWORD);
        if(!table_exists($pdo, TABLENAME)) {
            create_table($pdo, TABLENAME);                
        }

        echo json_encode(get_messages($pdo));
    } catch (PDOException $e) {
        
        echo 'Сервіс недоступний';
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
        $sth = $pdo->prepare("SELECT * FROM reports");
        $sth->execute();

        return $sth->fetchAll(PDO::FETCH_BOTH);
    }


    // echo json_encode(
    //     array( 
    //         array( 
    //             "id" => 11, 
    //             "host" => "Mr. Nice", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "1111"
    //         ),
    //         array( 
    //             "id" => 12, 
    //             "host" => "Mr. Narco", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "4444"
    //         ),
    //         array( 
    //             "id" => 13, 
    //             "host" => "Mr. Nice", 
    //             "code" => 55, 
    //             "text" => "message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1", 
    //             "created" => "44444444"
    //         ),
    //         array( 
    //             "id" => 14, 
    //             "host" => "Mr. Narco", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "444555555"
    //         ),
    //         array( 
    //             "id" => 15, 
    //             "host" => "Mr. Nice", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "66666666666666"
    //         ),
    //         array( 
    //             "id" => 16, 
    //             "host" => "Mr. Narco", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "777777777777"
    //         ),
    //         array( 
    //             "id" => 17, 
    //             "host" => "Mr. Narco", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "88888888888"
    //         ),
    //         array( 
    //             "id" => 18, 
    //             "host" => "Mr. Nice", 
    //             "code" => 55, 
    //             "text" => "message1", 
    //             "created" => "9999999999"
    //         )
    //     )
    // );
?>