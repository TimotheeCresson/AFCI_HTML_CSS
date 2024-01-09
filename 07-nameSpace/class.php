<?php 

class Exemple {
// attributs
public $var;
//Constructor
public function __construct($var) {  // Le constructeur s'applique quand on fait un new avec un paramètre
    $this->var = $var;
}
// setter
function setVar($a) {
    $this-> $a;
}
//getter
function getVar() {
    return $this->var;
}

//Method
function bonjour() {
    return "bonjour";
}
}
?>