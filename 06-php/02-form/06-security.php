<?php 
/* 
    Les failles de sécurité qu'un développeur web se doit de prévoir sont :
        - XSS (cross site Scripting)
        - CSRF (Cross site Rquest Forgery)
        - Brute Force
        - Injection SQL

        ?------------------------- XSS ------------------------------------------
    La 1ère, XSS, consiste à pouvoir intégrer du HTML ou des SCRIPT directement depuis un formulaire.
    Si l'utilisateur rentre un message comme "<script>alert("Hack !");</script>
    et que cela s'exécute, alors vous avez une faille XSS.

    2 choses à faire pour s'en protéger
    Si une information envoyé par un utilisateur doit être affiché en JS, surtout ne pas utiliser "innerHTML" mais plus "innerText" ou "textContent"
    En PHP, on filtrera le texte à afficher avec "htmlspecialchars" ou "htmlentities"

    ? --------------------------- CSRF --------------------------------------------
    Le CSRF consiste à répondre à un petit formulaire innocent qui cache derrière des champs invisible et une action qui redirige vers un formulaire important.

    Par exemple, l'administrateur d'un site répond à un sondage qui va le ramener sur son site et donner le droit d'administration à un inconnu

    Pour s'en protéger, on va générer en arrivant sur le formulaire, un jeton (chiffres ou lettres aléatoire) aléatoire que l'on sauvegarde en session.
    Puis afficher ce même jeton dans un champ hidden de notre formulaire, pour enfin lors de la validation  de celui-ci, comparer le jeton envoyé par le formulaire avec celle en session.  (voir dans session, dossier _csrf.php)

    ? ------------------------- Injection SQL ------------------------------------
    L'injection SQL consiste à ce qu'un utilisateur écrive du SQL dans un formulaire et que celui-ci soit interprété et exécuté par votre base de donnée
    Imaginons une requête simple comme :
        SELECT * FROM messages WHERE auteur = InformationUtilisateur
    Si l'utilisateur tape "1; DROP DATABASE;" et que l'on se contente d'insérer la donnée brute on obtiendra :
        SELECT * FROM messages WHERE auteur = 1; DROP DATABASE;   ce qui pose problème.
    La solution à cela est nommé "requête préparé"
    Cela consiste en une requête en 2 temps, la 1ère ne contenant que la requête sans les informations qui seront interprétés 
    puis dans un snd temps, les infos inséré  : 
        SELECT * FROM messages WHERE auteur = ?;
            ou
        SELECT * FROM messages WHERE auteur = :choixUtilisateur
    Et dans un snd temps :
        execute avec "1; DROP DATABASE;"

    La base de donnée va comprendre que l'information envoyé en snd temps n'est pas du SQL, seul la 1ère sera interprété.
    
    ? ------------------------ BRUTE FORCE -----------------------------------------
    Cela consiste en l'envoi de multiple requête (souvent par un bot), pour tenter toutes les combinaisons possible d'identifier afin d'en trouver un valide.

    Ici, plusieurs solutions existent, il faut juste faire la part des choses entre ce qui est contraignant pour l'utilisateur et ce qui le sécurise le plus.

    Pour s'en protéger, on peut imaginer bloquer le compte utilisateur après un certain nombre d'essai, puis le forcer à répondre à un email ou attendre un certain temps avant de réessayer.

    On peut ajouter une authentification à multiple facteur
        Un mail ou un SMS à chaque fois que l'utilisateur veut se connecter

    Ou bien un captcha pour bloquer ou ralentir les bots.  (création voir services  _captcha.php)

*/
if (!function_exists('set_CSRF')) {
    // Déclarer la fonction seulement si elle n'existe pas déjà
    function set_CSRF() {
        include_once(__DIR__ . "/../ressources/services/_csrf.php");
    }
}





$error = $password = "";
if ($_SERVER['REQUEST_METHOD']=== 'POST' && isset($_POST['password'])) {
    if (empty($_POST["password"])) {
        $error = "Veuillez entrer un mot de passe";
    }
    else {
        $password = trim($_POST["password"]);  // trim permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement
        /* 
            password_hash va hacher le string passé en 1er paramètre selon l'algorithme passé en 2nd paramètre.

            Hacher et crypter sont 2 choses différentes
            Un hachage ne peut pas être "déhaché" alors que l'on peut "décrypter" quelque chose qui a été "crypté" 

            Le second paramètre est une constante à choisir entre :
                - PASSWORD_DEFAULT
                - PASSWORD_BCRYPT
                - PASSWORD_ARGON2I
                - PASSWORD_ARGON2ID
            Le 1er choisira l'actuel algorithme le plus sécurisé selon les développeurs de PHP, actuellement c'est le BCRYPT

            Un hachage est différent à chaque fois, excepté les 1er caractères.
        */
        $password = password_hash($password, PASSWORD_DEFAULT);
    }
    // Vérification CSRF :
    if (!is_CSRF_valid()) {
        $error = "La méthode utilisée n'est pas permise !";
    }
    // Vérificatin Captcha :
    if (!isset($_POST["captcha"], $_SESSION["captchaStr"]) || $_POST["captcha"] !== $_SESSION["captchaStr"]) {
        $error = "CAPTCHA Incorrecte !";
    }
}

$title = "Sécurité";
require __DIR__. "/../ressources/template/_header.php"
?>
<!-- <form action="https://www.google.fr/search">
    <input type="text" placeholder="Comment allez vous?">
    <input type="hidden" name="q" value="pizza">
    <input type="submit" value="Envoyer">
</form>              -->
<!-- exemple non sécurisé (en remplissant le formulaire et en cliquant sur envoyer, cela nous envoie sur google (pizza))   ici c'est la CSRF  -->
<h1>Formulaire pour hacher un mot de passe :</h1>
<form action="#" method="post">
    <input type="password" name="password" placeholder="Mot de passe à hacher" required>
    <!-- Protection CSRF : -->
    <?php set_CSRF()?>
    <!-- Protection Captcha : -->
    <div>
        <label for="captcha">Veuillez recopiez le texte ci-dessus :</label>
        <br>
        <img src="/captcha" alt="captcha">
        <br>
        <input type="text" name="captcha" id="captcha" pattern="^[A-Z0-9]{6}"> 
        <!-- Pattern attribute: L'attribut "pattern" spécifie une expression régulière que la valeur du champ de texte doit satisfaire. Ici, il exige que le texte soit composé de lettres majuscules (A-Z) ou de chiffres (0-9) et qu'il ait une longueur de 6 caractères. -->
    </div>
    <input type="submit" value="Hacher">
    <span class="error"><?php echo $error ??""?></span>
</form>
<?php if (empty($error) && !empty($password)): ?>
    <div>
        Votre mot de passe haché est : <?= $password ?>
    </div>
<?php 
endif;
require __DIR__. "/../ressources/template/_footer.php"
?>