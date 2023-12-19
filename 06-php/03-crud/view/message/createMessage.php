<?php 
$title = "Créer votre message";
require __DIR__. "/../../../ressources/template/_header.php";
?>

<form action="#" method="post">
    <label for="message">Ecrivez votre message</label>
    <input type="text" name="message" id="message" style="height: 200px; width: 300px;">
    <input type="submit" value="Enregistrer Message">
</form>

<?php 
require __DIR__. "/../../../ressources/template/_footer.php";
?>