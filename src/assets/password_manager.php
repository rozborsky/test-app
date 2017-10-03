<?php   
    class PasswordManager {
        public function encrypt($password) {
            return password_hash($password, PASSWORD_BCRYPT);
        } 
    

        public function comparePasswords($password, $hash) {
            return password_verify($password, $hash);
        } 
    }
?>