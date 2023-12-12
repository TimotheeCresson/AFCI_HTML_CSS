<?php 
/* 
    Pour se déconnecter, il suffit de supprimer les infos que l'on a stocké en session.
    Si votre session ne sert qu'à la connexion, on peut tout simplement, tout supprimer
*/
session_start();
require "../ressources/services/_shouldBeLogged.php";
shouldBeLogged(true, "/");
unset($_SESSION); // vide la superglobal, plus besoin de recharger la page
session_destroy();
setcookie("PHPSESSID", "", time()-3600); // supprimer le cookie

// et je redirige mon utilisateur ailleurs
header("Location: ./04-connexion.php");

// le bouton étant créer, il suffit d'appuyer dessus pour se déconnecter (voir dans index.php) et voir dans services => shouldBeLogged.php dans ressources où on va vérifier si l'utilisateur est déjà connecté ou non avant de déconnecter
?>