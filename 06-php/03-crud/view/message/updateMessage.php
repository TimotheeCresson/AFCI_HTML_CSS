<?php 
$title = "Édition de message";
require __DIR__."/../../../ressources/template/_header.php";
?>
<form action="" method="post">
    <textarea name="message" placeholder="Veuillez entrer un message"
    ><?= $message["message"] ?>   <!-- il faut indenté comme cela pour ne pas avoir de tabulation -->
    </textarea>  
    <input type="submit" value="Envoyer" name="editMessage">
</form>
<?php 
require __DIR__."/../../../ressources/template/_footer.php";
?>