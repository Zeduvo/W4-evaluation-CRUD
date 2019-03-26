<?php

    require_once '../config.php';
    require_once '../todo.php';

    $id = $_POST['id'];
    $title = $_POST['title'];
    $category = $_POST['category'];
    $description = $_POST['description'];

function update_one($id, $title, $category, $description){
    $connect = new PDO(DBH, USER, PASSWORD);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $request = $connect->prepare("UPDATE todos SET title='$title',category='$category',description='$description' WHERE id = '$id' ;");
    $request->execute();
}

echo update_one($id, $title, $category, $description);

?>

