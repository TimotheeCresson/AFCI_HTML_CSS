<?php 
require __DIR__ . "/../../ressources/services/_shouldBeLogged.php";
require __DIR__ . "/../model/messageModel.php";

function listMessage() {
    $message = getMessageByUser($_GET["id"]);
    var_dump($message);

    require __DIR__ . "/../view/message/listMessage.php";
}

function createMessage() {
    $idUser = "";
    $messageContent = "";
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    shouldBeLogged(true, "/connexion");
    $error = [];
    if (empty($_POST["message"])) {
        $error["messageContent"] = "Veuillez écrire votre message";
    }
    else {
        $messageContent = $_POST["message"];
    }
    

    require __DIR__ . "/../view/message/createMessage.php";
    }
}
?>

