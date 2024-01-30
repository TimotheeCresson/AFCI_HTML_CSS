<?php 
// Quels sont les méthodes acceptés par cette apge
// api de type rest vont 
/* GET: Cette méthode est utilisée pour récupérer des données à partir d'une ressource spécifiée. Lorsque vous effectuez une requête GET, vous demandez au serveur de renvoyer des informations, généralement dans l'URL. Par exemple, lors de l'ouverture d'une page web, votre navigateur effectue généralement une requête GET pour récupérer le contenu de cette page.

POST: Cette méthode est utilisée pour envoyer des données au serveur afin de créer une nouvelle ressource. Lorsque vous soumettez un formulaire en ligne, le navigateur effectue généralement une requête POST pour envoyer les données du formulaire au serveur. Les données sont généralement incluses dans le corps de la requête plutôt que dans l'URL.

PUT: Cette méthode est utilisée pour mettre à jour une ressource existante sur le serveur. Vous pouvez envoyer des données avec une requête PUT pour remplacer ou mettre à jour les informations d'une ressource. Cela est souvent utilisé dans le contexte des API RESTful pour mettre à jour des objets ou des entités.

DELETE: Comme son nom l'indique, cette méthode est utilisée pour demander au serveur de supprimer une ressource spécifiée. Lorsqu'une requête DELETE est effectuée, elle indique au serveur de supprimer la ressource spécifiée. */
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
require __DIR__ . "/../api.php";
session_start();
require __DIR__ . "/../model/UserModel.php";
global $regexPass;
$regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

// REQUEST_METHOD : est ce qu'on est ne post, get ...
switch($_SERVER["REQUEST_METHOD"]) {
    case 'POST': inscription(); break;
    case 'GET': listeUtilisateur(); break;
    case 'POST': updateUser(); break;
    case 'POST': deleteUser(); break;     
}

function inscription(){
    // récupérer le contenu vers la requête
    $json = file_get_contents('php://input');
    
    // on décode le json
    $data = json_decode($json);
    $username = $email = $password = "";
    $error = setError();

    if ($data && isset($data->userForm)) {
        // traitement username
        if (empty($data->username)) {
            setError("username", "Veuillez saisir un noom d'utilisateur");
        } else {
            $username = clean_data($data->username);
            if (!preg_match("/^[a-zA-Z'\s-]{2,25}$/", $username)) {
                setError("username", "Veuillez saisir un nom d'utilisateur valide");
            }
        }
        // Traitement email
        if (empty($data->email)) {
            setError("email", "Veuillez saisir un email");
        } else {
            $email = clean_data($data->email);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                setError("email", "Veuillez saisir un email valide");
            }
            // Je vérifie si l'utilisateur existe en BDD
            $resultat = getOneUserByEmail($email);
            if ($resultat) {
                setError("email", "Cet email est déjà enregistré");
            }
        }
        // Traitement password 
        if (empty($data->password)) {
            setError("password", "Veuillez saisir un mot de passe");
        } else {
            $password = clean_data($data->password);

            //On utilise la regex défini plus haut
            global $regexPass;
            if (!preg_match($regexPass, $password)) {
                setError("password", "Veuillez saisir un mot de passe valide");
            } else {
                $password = password_hash($password, PASSWORD_DEFAULT);
            }
        }
        // Vérification du mot de passe
        if (empty($data->passwordBis)) {
            setError("passwordBis", "Veuillez saisir à nouveau votre mot de passe");
        }
        elseif ($data->password != $data->passwordBis) {
            setError("passwordBis", "Veuillez saisir le même mot de passe");
        }
        $error = setError();
        // Envoi des données
        if (empty($error["violations"])) {
            // J'ajoute mon utilisateur en BDD
            addUser($username, $email, $password);

            // On peut aussi retourner l'utilisateur ajouté et le renvoyer au front pour confirmer l'inscription
            sendResponse([], 200, "Inscription validé");
        }
        
    }
    sendResponse($error, 400, "Formulaire incorrecte");
};
function listeUtilisateur(){
    // Je récupère tous mes utilisateurs
    if (isset($_GET["id"])) {
        $users = getOneUserById((int)$_GET["id"]);
    } else {
        $users = getAllUsers();
    }
    sendResponse($users, 200, "utilisateur(s) récupéré.");
};

function updateUser(){
};

function deleteUser(){
    if (!isset($_GET["id"], $_SESSION["idUser"])|| $_SESSION["idUser"] != $_GET["id"]) {
    sendResponse($_SESSION, 400, "Accès intedit!");
    }
    // On supprime l'utilisateur
    deleteUserById((int)$_GET["id"]);
    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID","", time()-3600);

    sendResponse([], 200, "compte supprimé et déconnecté"); 
};
