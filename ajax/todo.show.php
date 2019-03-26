<?php

    require_once '../config.php';
    require_once '../todo.php';

    $id = $_POST['id'];
    
function show_one($id){
    $connect = new PDO(DBH, USER, PASSWORD);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $request = $connect->prepare("SELECT * FROM todos WHERE id = '$id';");
    $request->setFetchMode(PDO::FETCH_CLASS, 'Todo');
    $request->execute();
    return $request->fetch();
}

$show = show_one($id);

echo json_encode($show);

?>