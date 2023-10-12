<?php
header("Access-Control-Allow-Origin: *");

require_once './User.php';
$user = new User();

if(isset($_POST['name'])){
    $result = $user->postName($_POST['name']);

    if($result)
        echo json_encode('Insertion réussie');
    else 
        echo json_encode("Echec de l'insertion");
}

if(isset($_GET['getAllUsers'])){
    $result = $user->getUsers();
    echo json_encode($result);

}
?>