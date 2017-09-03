<?php
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
  
    echo json_encode(
        array( 
            array( 
                "id" => 11, 
                "host" => "Mr. Nice", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "1111"
            ),
            array( 
                "id" => 12, 
                "host" => "Mr. Narco", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "4444"
            ),
            array( 
                "id" => 13, 
                "host" => "Mr. Nice", 
                "code" => 55, 
                "text" => "message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1 message1", 
                "created" => "44444444"
            ),
            array( 
                "id" => 14, 
                "host" => "Mr. Narco", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "444555555"
            ),
            array( 
                "id" => 15, 
                "host" => "Mr. Nice", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "66666666666666"
            ),
            array( 
                "id" => 16, 
                "host" => "Mr. Narco", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "777777777777"
            ),
            array( 
                "id" => 17, 
                "host" => "Mr. Narco", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "88888888888"
            ),
            array( 
                "id" => 18, 
                "host" => "Mr. Nice", 
                "code" => 55, 
                "text" => "message1", 
                "created" => "9999999999"
            )
        )
    );
?>