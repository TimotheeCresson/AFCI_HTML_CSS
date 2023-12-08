<?php 

/* 
    Si on a besoin de la session sur quelques rares pages, autant l'activer uniquement là où elle est utile.
    Mais si tout votre site en a besoin, il est possible de placer le "session_start()" dans un fichier chargé à tout les coups comme le header.

    Il est possible d'indiquer la durée de vie du cookie contenant l'id de session en option du session_start()

    par défaut, il est à 0, c'est-à-dire qu'il disparaît si on quitte le navigateur.
*/
session_start(["cookie_lifetime" =>3600]);

/* 
    Sur un projet complexe, il est possible d'oublier que l'on a déjà un session_start
    Un message de "notice" s'affiche alors si l'on remet un session_start() indiquant que le 2nd a été ignoré.
    Pour éviter cela, on peut faire une condition avec "session_status()" et l'une des 3 constantes suivantes :
        -  PHP_SESSION_NONE
        -  PHP_SESSION_DISABLED
        -  PHP_SESSION_ACTIVE
*/
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/* 
    ! ATTENTION : La durée de vie des cookies n'est pas très précise.
    Le navigateur fait régulièrement un nettoyage des cookies, vérifiant à ce moment là si leur durée de vie est dépassé ou non.

    Une solution pour avoir une session plus précise, est de stocker la durée de vie en session lors de la création et si celle ci est dépassée, supprimer manuellement le cookie.

    Si ma session est morte, mon affichage pourrait me retourner des warnings, car je tente d'accèder à des clef qui n'existent pas.

    Pour éviter cela, il est de bon ton de vérifier l'existence de celles ci avant de les utiliser :
        On pourra utiliser pour cela "isset()" qui prend autant d'argument que l'on souhaite, et retourne "true" si ils existent et "false" si ils n'existent pas.
*/
if (isset($_SESSION["username"], $_SESSION["food"], $_SESSION["age"])) {
    $message = $_SESSION["username"] ." aime la "
        . $_SESSION["food"] . " et a "
        . $_SESSION["age"]. "<br>"; 
}
/* 
    Si je souhaite supprimer une information de la session, je peux simplement utiliser "unset()" sur cette information
*/
unset($_SESSION["food"]);
// var_dump($_SESSION);
/* 
    Et si je veux faire disparaître la session dans son entièreté, je vais passer par 3 étapes 
        -  La 1ère est un "session_destroy()"
        -  Le 2nd est "unset()"
        -  le 3e est setcookie()
*/
// echo "<hr>";
session_destroy();
// var_dump($_SESSION);
/* 
    Une fois la session détruite, il reste cela dit les informations de session dans la superglobal et cela jusqu'au prochain rechargement.
    On pourra par sécurité "unset" la superglobal
*/
unset($_SESSION);
/* 
    La session a bien disparut, mais il reste le cookie sur le navigateur de l'utilisateur.
    Pour le supprimer, on lui indiquera une date d'expiration passé.
*/
setcookie("PHPSESSID", "", time()-3600);

/* 
    Il est possible de créer des sessions avec un nom différent en changeant ce nom avant le session_start();
    Pour cela, on utilisera "session_name()"
*/

$title = "Session page 2";
require "../ressources/template/_header.php";
echo $message ??"";
echo "<a href='./06-a-session.php'>Page 1</a>";
require "../ressources/template/_footer.php";
?>