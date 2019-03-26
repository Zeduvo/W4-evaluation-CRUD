<?php

    require_once '../config.php';
    require_once '../todo.php';

    $title = $_POST['title'];
    $category = $_POST['category'];
    $description = $_POST['description'];

function add($title, $category, $description){
    $connect = new PDO(DBH, USER, PASSWORD);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $request = $connect->prepare("INSERT INTO todos (title, category, description) VALUES ('$title', '$category', '$description') ;");
    $request->execute();
    return $connect->lastInsertId();
}
  
echo add($title, $category, $description);

?>