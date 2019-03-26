<?php

    require_once '../config.php';
    require_once '../todo.php';

    $id =$_POST['id'];

function delete_one($id){
    $connect = new PDO(DBH, USER, PASSWORD);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $request = $connect->prepare("DELETE from todos WHERE id = '$id';");
    $request->execute(); 
}

delete_one($id);

?>
