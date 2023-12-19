<?php 
require_once __DIR__."/../../ressources/services/_pdo.php";

function getMessageByUser($idUser) {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("SELECT * FROM ListMessage WHERE idUser = ?");
    $sql->execute([$idUser]);
    return $sql->fetchAll();
}

function addMessage() {
$pdo = connexionPDO();
$sql = $pdo->prepare("INSERT INTO messages(message, idUser)");
$sql->execute();
}
?>