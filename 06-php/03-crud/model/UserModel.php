<?php 

/* Le terme "CRUD" fait référence à un ensemble d'opérations de base souvent utilisées dans la manipulation des données dans les bases de données ou les systèmes d'information. CRUD est un acronyme qui représente les quatre opérations fondamentales :

    Create (Créer) : Il s'agit de l'opération pour créer de nouvelles données. Dans le contexte d'une base de données, cela correspond généralement à l'ajout d'un nouveau enregistrement dans une table.
    
    Read (Lire) : L'opération de lecture consiste à récupérer des données existantes. Cela équivaut à une requête de sélection dans une base de données pour obtenir des informations spécifiques.
    
    Update (Mettre à jour) : Cette opération permet de modifier des données existantes. Vous pouvez mettre à jour les enregistrements existants pour refléter de nouvelles informations ou corriger des erreurs.
    
    Delete (Supprimer) : Il s'agit de l'opération pour supprimer des données. Dans le contexte d'une base de données, cela correspond généralement à la suppression d'un enregistrement spécifique d'une table. */

    /* 
        On importe dans ressources : database   01-users.sql en clique droit reveal in File Explorer puis on ouvre docker, on ouvre phpMyAdmin  et on importe le fichier 
        puis on va sur users   insérer et on crée un user avec email et mdp
    */

require_once __DIR__ . "/../../ressources/services/_pdo.php";

/**
 * récupère tous les utilisateurs
 *
 * @return array
 */
function getAllUsers():array {
    // Je me connecte à la base de donnée
    $pdo = connexionPDO();  // php data object

    // J'envoi la requête SQL
    $sql = $pdo->query("SELECT idUser, username FROM users");  // je cherche la méthode de mon $pdo avec ->

    // Je récupère toutes les informations
    return $sql->fetchAll();
}

/**
 * Sélectionne un utilisateur par son email
 *
 * @param string $email
 * @return array|boolean
 */
function getOneUserByEmail(string $email): array|bool {
    $pdo = connexionPDO();
    // "SELECT * FROM users WHERE email = $email"   on ne peut pas faire ça car si on marque du sql après le =  il sera interprété.
    // Je prépare ma requête afin d'éviter une injection SQL
    $sql = $pdo->prepare("SELECT * FROM users WHERE email = ?");

    // J' exécute ma requête en lui donnant les paramètres dans le même ordre que les "?"
    $sql->execute([$email]);

    // Je récupère la 1ère information trouvé avec fetch
    return $sql->fetch();
}

/**
 * récupère un utilisateur via son id
 *
 * @param string $id
 * @return array|boolean
 */
function getOneUserById(string $id): array|bool {
    $pdo = connexionPDO();

    // Plutôt que les "?", on peut utiliser un placeholder précédé de ":"
    $sql = $pdo->prepare("SELECT * FROM users WHERE idUser = :id");

    // Avec les placeholder, on donne les paramètres via un tableau associatif dont les clefs correspondent aux placeholders
    $sql->execute(["id"=>$id]);
    return $sql->fetch();
}

/**
 * Ajoute un utilisateur en base de donnée
 *
 * @param string $us nom d'uilisateur
 * @param string $em email
 * @param string $pass mot de passe 
 * @return void
 */
function addUser(string $us, string $em, string $pass): void { 
    $pdo = connexionPDO();
    $sql = $pdo->prepare("INSERT INTO users(username, email, password) VALUES(?, ?, ?)");
    $sql->execute([$us, $em, $pass]);
}


/**
 * Supprime un utilisateur via son ID
 *
 * @param string $id
 * @return void
 */
function deleteUserById(string $id): void {  // void veut dire retourne rien
    $pdo = connexionPDO();
    $sql = $pdo->prepare("DELETE FROM users WHERE idUser=:id");

    /* 
        Une autre façon d'indiquer les paramètres de la requête, c'est l'utilisation de "bindParam" ou "bindValue".
        Dans ce cas, on laisse l'execute vide.
        Les bind prendrons en 1er argument, le placeholder à changer
        En snd, la valeur à lui donner
        et optionnellement en 3e, le type (int, string) via une constante
        $sql->bindParam("id", $id);
        $sql->bindParam("id", $id, PDO::PARAM_STR);
    */
    $sql->bindParam("id", $id);
    $sql->execute();
}

/**
 * Met à jour l'utilisateur via son id
 *
 * @param string $username nom d'utilisateur 
 * @param string $email email 
 * @param string $password mot de passe
 * @param string $id
 * @return void
 */
function updateUserById(string $username, string $email, string $password, string $id): void {
    $pdo = connexionPDO();
    $sql = $pdo->prepare("UPDATE users SET username=:us, email=:em, password=:mdp WHERE idUser =:id");
    $sql->execute([
        "id"=>(int)$id,
        "mdp"=>$password,
        "em"=>$email,
        "us"=>$username
    ]);
}
?>