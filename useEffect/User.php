<?php
require_once 'Database.php';

class User extends Database {

    public function postName($name){
        try {
            $query = $this->pdo->prepare("INSERT INTO user (name) VALUES (:name)");
            $query->bindValue(':name', $name, PDO::PARAM_STR);           

            $query->execute();     

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function getUsers(){ // récupère tous les users juste pour l'exemple
        try {
            $query = $this->pdo->prepare("SELECT * FROM user");
            $query->execute();
            $result = $query->fetchAll(PDO::FETCH_ASSOC);

            return $result;
        } catch (\Throwable $th) {
            return 'une erreur est survenue';
        }

    }



    

}

?>