<?php 

include 'class.php';

$exemple = new Exemple(20);


var_dump($exemple->getVar());
// $exemple->setVar(30);
// var_dump($exemple->getVar());

echo $exemple->bonjour();
?>