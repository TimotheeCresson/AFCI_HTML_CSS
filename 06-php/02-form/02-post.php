<?php 

// Je déclare les variables dont je vais avoir besoin
$food = $username = $drink = "";  // on peut définir toutes les variables à la fois sur = ""
$error = [];
$foodList = [
    "welsh"=>"Welsh (car vive le fromage)", 
    "cannelloni"=>"Cannelloni (Pour changer des raviolis)",
    "oyakodon"=>"Oyakodon (car j'aime l'humour noir"
];
$drinkList = [
    "jus de tomate"=>"Jus de Tomate (je suis un vampire)",
    "milshake"=>"Milshake (aux fruits de préférence)" , 
    "limonade"=>"Limonade (J'ai besoin de sucre)"
];

/* 
    
*/
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["meal"])) {
    // var_dump($_POST);    on obtient array(4) { ["username"]=> string(0) "" ["food"]=> string(8) "oyakodon" ["drink"]=> string(13) "jus de tomate" ["meal"]=> string(0) "" } 

    // Vérification du champ "username" (si ce dernier est vide ou non)
    if (empty($_POST["username"])) {
        $error["username"] = "Veuillez entrer un nom d'utilisateur";
    } 
    else {
        $username = $_POST["username"];  // on récupère seulement ce que l'utilisateur à entrez mais on veut filtrer donc on rajoutera   :

        // trim :  supprime les espaces avant et après le string
        $username = trim($username); 

        // Retire les "\" sur les quotes
        $username = stripslashes($username);

        // Transforme les caractères spéciaux en code HTML ("<" devient "&lt;")
        $username = htmlspecialchars($username);

        // $username = htmlentities($username);

        if (strlen($username) < 3 || strlen($username) > 20) {
            $error["username"] = "Veuillez entrer un nom d'utilisateur d'une longueur comprise entre 3 et 20";
        }
        if (!preg_match("/^[A-Za-z\-_]+$/", $username)) {  // preg math   : utilisée pour effectuer une recherche de correspondance d'une expression rationnelle (regex) dans une chaîne de caractères. 
            $error["username"] = "Veuillez n'utiliser que des lettres, des tirets ou des underscores";
        }
    }
    // Vérification de mon champ "food"
    if (empty($_POST["food"])) {
        $error["food"] = "Veuillez choisir un repas";
    }
    elseif(!array_key_exists($_POST["food"], $foodList)) {
        $error["food"] = "Ce repas n'existe pas !";
    } 
    else {
        // Ici mon résultat est forcément égale à ce qu'il y a dans mon tableau, je peux donc ne pas faire de trim/htmlspecialchar...
        $food = $_POST["food"];
    }
    // vérification du champ "drink"
    if (empty($_POST["drink"])) {
        $error["drink"] = "Veuillez choisir une boisson !"; 
    } 
    elseif(!array_key_exists($_POST["drink"], $drinkList)) {
        $error["drink"] = "Cette boisson n'existe pas !"; 
    } 
    else {
        $drink = $_POST["drink"];
    } 
    if (empty($_POST["cgu"])) {
        $error["cgu"] = "Veuillez accepter nos conditions d'utilisation";
    }
    /* 
        Une fois toute les vérifications faite.
        Il restera à voir si on a pas d'erreur :
    */
    if(empty($error))
    {
        // On enregistre ensuite en BDD nos informations. (voir cours suivant)
        echo "<script>alert('Formulaire validé')</script>";
    }
}


$title = "";
require "../ressources/template/_header.php"
?>
<form action="#" method="POST">
    <!-- On a ajouté la value pour ne pas avoir à la retaper à chaque fois et une classe qui change selon si il y a une erreur ou pas 
    Attention : ne surtout pas mettre de value sur un mot de passe, on veut que l'utilisateur le rerentre à chaque fois quand on reload la page-->
    <input type="text" 
    name="username" 
    placeholder="Entrez votre Nom"
    class="<?php echo (empty($error["username"])?"":"formError") ?>"
    value = "<?= $username ?>"> 
    <!-- J'affiche le message d'erreur de username -->
    <span class="error"><?php echo $error["username"]??"" ?></span>
    <br>
    <!-- champ food  -->
    <fieldset class="<?php echo (empty($error["food"])?"":"formError") ?>">
        <legend>Nourriture Favorite</legend>
        <!-- Je boucle ma liste d'aliment pour afficher autant de radio que voulu -->
        <?php foreach($foodList as $key => $message):?>
            <input type="radio" name="food" 
                value="<?= $key ?>"
                id="<?= $key ?>"
                <?= $food === $key ? "checked":"" ?>
                >
            <label for="<?= $key ?>">
                <?= $message ?>
            </label>
            <br>
        <?php endforeach;?>
        <!-- j'affiche le message d'errure de "food" -->
        <span class="error"><?php echo $error["food"]??"" ?></span>
    </fieldset>
    <label for="drink">Boisson favorite</label>
    <br>
    <select name="drink" id="drink">
        <!-- On boucle sur le tableau de boisson -->
        <?php foreach($drinkList as $key => $value):?>
        <option value="<?php echo $key ?>"
            <?= $drink === $key ? "selected":"" ?>
            >
            <?= $value ?>
        </option>
        <?php endforeach; ?>
    </select>
    <!-- affiche le message d'erreur de "drink"-->
    <span class="error"><?php echo $error["drink"]??"" ?></span>
    <br>
    <input type="checkbox" name="cgu" id="cgu" value="cgu">
    <label for="cgu">J'accepte que mes données ne m'appartiennent plus</label>
    <!-- affiche le message d'erreur de "cgu"-->
    <span class="error"><?php echo $error["cgu"]??"" ?></span>
    <br>
    <button type="submit" name="meal">Envoyer</button>
</form>
<!-- Vérification si le formulaire s'est bien placé -->
<?php if(empty($error) && isset($_POST["meal"])):?>
<h1>Meilleurs Repas :</h1>
<p>
    <!-- affichage d'un message -->
    <?php echo "Pour $username, le meilleur repas est \"$food\" avec \"$drink\"" ?> <!-- cela affiche les guillemets \"$drink\" -->
</p>
<?php 
endif;
require "../ressources/template/_footer.php"
?>