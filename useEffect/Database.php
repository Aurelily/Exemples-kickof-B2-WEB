<?php

class Database {
    // private $pdo;
    //property
    protected $pdo; // si c'est en pas en private je pourrais faire this->pdo dans l'enfant sinon j'utilise le getter
    // method 
    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=localhost;dbname=user_test;charset=utf8','root','');
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
    }

    // public function getPdo(){ // si c'est en privé j'utilise le getter dans l'enfant 
    //     return $this->pdo;
    // }
}
?>