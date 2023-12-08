<?php 

/* 
    La session comme le localstorage permet  de stocker des informations temporaires.
    Mais cette fois-ci du côté serveur.
    Pour différencier une session d'un utilisateur d'une autre, son identifiant est stocké dans un cookie ( un cookie est un petit fichier texte stocké sur l'ordinateur d'un utilisateur par le navigateur web lorsqu'il visite un site web.) qui est envoyé à l'utilisateur.

    A la différence du localstorage, n'importe quel type de donnée peut être stockée en session.

    Les fonctionnalités de session sont inaccessible tant que l'on n'a pas lancé un "session_start()"
        La session doit être start avant tout affichage HTML.
    Lorsque l'on va dans inspecter, stockage, cookie, on obtient une données appelées PHPSESSID (nom par défaut) avec un identifiant correpondant à notre session (token *) avec d'autres données
*/
session_start();
$title = "Session page 1";
require "../ressources/template/_header.php";

// On peut retrouver l'id de la session dans les cookies ou avec la fonction "session_id()"
var_dump($_COOKIE, session_id()); // dans $_cookie, il y a tous les cookies dont notre identifiant de session qu'on retrouve aussi dans session_id(),
/* 
    Le nom par défaut du cookie est "PHPSESSID"

    Pour stocker des données en session, on utilisera la superglobal "$_SESSION" tel un tableau associatif.
*/
$_SESSION["food"] = "Pizza";
$_SESSION["age"] = 54;
$_SESSION["username"] = "Maurice";
?>
<a href="./06-b-session.php">Page 2</a>
<?php 
require "../ressources/template/_footer.php";
?>




















<!-- 
*
Jetons d'authentification (Auth Tokens) :

Définition : Un jeton d'authentification est une chaîne de caractères générée et émise par un serveur d'authentification après qu'un utilisateur s'est connecté avec succès. Ce jeton est ensuite inclus dans les requêtes ultérieures pour prouver l'identité de l'utilisateur.
Fonctionnement : Lorsqu'un utilisateur se connecte à un service en ligne (par exemple, un site web ou une application), le serveur d'authentification génère un jeton. Ce jeton est ensuite renvoyé à l'utilisateur et doit être inclus dans les entêtes des requêtes subséquentes. Le serveur vérifie ce jeton pour chaque requête afin de s'assurer que l'utilisateur est toujours authentifié.
Jetons de programmation (Programming Tokens) :

Définition : En programmation, un "token" peut également faire référence à un élément de base identifiable dans le code source d'un programme. Ces éléments peuvent inclure des mots-clés, des identificateurs, des opérateurs, etc.
Fonctionnement : Les tokens dans le code source sont des unités de base que le compilateur ou l'interpréteur traite. Par exemple, dans de nombreux langages de programmation, un programme peut être divisé en tokens tels que les mots-clés (if, else, while), les identificateurs (noms de variables), les opérateurs (+, -, *), etc.
En résumé, le terme "token" peut prendre différentes significations en fonction du contexte. Dans le contexte de la sécurité informatique, il est souvent associé à l'authentification et à la gestion des accès, tandis qu'en programmation, il peut se référer aux éléments de base dans le code source. -->