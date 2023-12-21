
<!-- require_once __DIR__."/../../ressources/services/_pdo.php";

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
} -->



<?php 
require_once __DIR__ . "/../../ressources/services/_pdo.php";            // on le fait en require once pour ne pas inclure plusieurs fois pdo           // on le fait en require once pour ne pas inclure plusieurs fois pdo

/**
 * Retourne tous les messages d'un utilisateur
 * 
 * @param integer $idUser
 * @return array|false
 */
function getMessageByUser(int $idUser): array|false {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("SELECT * FROM messages WHERE idUser = ?");   // le "?" est donnée dans le execute soit ici $idUser
    // $sql = $pdo->prepare("SELECT messages.*, username FROM messages INNER JOIN users USING idUser WHERE idUser = ?"); si on veut username en plus
    $sql->execute([$idUser]);
    return $sql->fetchAll();
}


/**
 * retourne un message via son id
 *
 * @param integer $id
 * @return array|false
 */
function getMessageById(int $id): array|false {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("SELECT * FROM messages WHERE idMessage = ?");   
    $sql->execute([$id]);
    return $sql->fetch();  //La méthode fetch() est généralement utilisée pour récupérer des résultats à partir d'une requête SELECT,
}
// ["idMessage"=>5, "message"=>"blababa"] avec fetch
// [["idMessage"=>5, "message"=>"blababa"]] avec fetchAll 


/**
 * Créer un nouveau message en BDD
 *
 * @param array $values
 * $values = ["message" =>(string), "idUser"=>(int)]
 * @return void
 */
function addMessage(array $values): void {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("INSERT INTO messages(idUser, message) VALUES (:idUser, :message)");   
    $sql->execute($values);
}

/**
 * supprimer un message 
 *
 * @param integer $id
 * @return void
 */
function deleteMessagebyId(int $id): void {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("DELETE FROM messages WHERE idMessage = ?");   
    $sql->execute([$id]);
}


/**
 * Met à jour un message via son ID 
 *
 * @param integer $idMessage
 * @param string $content
 * @return void
 */
function updateMessagebyId(int $idMessage, string $content): void {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("UPDATE messages SET message = :m, editedAt = current_timestamp() WHERE idMessage = :id");
    $sql->execute(['m' => $content, 'id'=>$idMessage]);
}