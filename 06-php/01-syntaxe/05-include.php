<?php 
/* 
    Include et Require permettent d'inclure d'autres fichiers dans notre code

    Une petite convention est de nommer les fichiers qui doivent être inclu et n'ont pas pour but d'être ouvert seul, avec un "_" les précédents.
*/
$title = "Include"; // on va chercher cela dans "_header.php" et on peut donc changer le titre
$mainClass = "includeNav"; // donne une classe à notre main
require __DIR__. "/../ressources/template/_header.php";
/* 
    La seule différence entre require et include est le niveau d'erreur lancé :
        - require en cas de problème provoque une "fatal error" mettant fin au code
        - include lui lance un "warning" et le code continue
*/
include(__DIR__ . "/../ressources/template/_nav.php");
?>
<div>
</div>
<?php 
/* 
    Dans un très gros projet avec beaucoup d'inclusion, il est possible de s'emmeller et de require plusieurs fois un même fichier.

    L'utilisation de "require_once" ou "include_once" règle ce problème.
    Car ces derniers avant d'inclure vérifient si le fichier n'a pas déjà été inclu (ils sont cela dit, un peu plus gourmand en ressource)
*/
require(__DIR__ . "/../ressources/template/_footer.php");
// require("../ressources/template/_footer.php")
// require_once("../ressources/template/_footer.php");
?>