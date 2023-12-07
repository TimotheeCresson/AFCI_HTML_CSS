<?php
/* 
    rand retourne par défaut une valeur aléatoire entre 0 et "getrandmax()"
    Mais on peut lui donner en paramètre un nombre minimum et maximum
*/
$r = rand(0,100);
echo $r, "<br>";

echo "<h1>Conditions</h1> <hr>";
// Si la condition est "true" alors on effectue ce qui se trouve entre accolade
if ($r < 50) {
    echo 'La variable est inférieure à 50';
}
// Optionnellemment, on peut ajouter des conditions avec elseif qui seront vérifiés si les précédentes sont fausses.
elseif($r > 50) {
    echo 'La variable est supérieure à 50';
}
// Optionnellement, on peut ajouter un "else" qui se déclenchera si toutes les conditions précédentes sont fausses.
else {
    echo 'La variable est égale à 50';
}

#--------------------------------------------------------------------
echo "<h2>Autres syntaxes</h2> <hr>";
/* 
    Il est aussi possible de remplacer les accolades par ":" pour marquer le début de la condition, puis "endif" pour marquer la fin
*/
if ($r < 50): 
    echo 'La variable est inférieure à 50'; 
elseif ($r > 50):
    echo 'La variable est supérieure à 50';
else: 
    echo 'La variable est égale à 50';
endif;

//Il est tout à fait possible de placer du HTML dans une condition: 
// autre exemple, on peut sortir de php pour faire du html puis revenir en php et fermer notre condition avec endif :    : 
if($r < 50):
?>
<p>Ceci est un texte html.</p>
<?php endif; ?>
<br>
<?php
/* 
    Si nos conditions ne contiennent qu'une seule instruction, il est out à fait possible d'ommetre ":" et "endif"
*/
if ($r < 50)
    echo 'La variable est inférieure à 50'; 
elseif ($r > 50)
    echo 'La variable est supérieure à 50';
else 
    echo 'La variable est égale à 50';

echo "<br>";
/* 
    Il est possible d'écrire une condition sur une seule ligne avec les ternaires  :
        condition ? true : false;
*/
echo "La variable est ". ($r < 50 ? "inférieur" : "supérieur ou égale") . " à 50";
echo "<br>";
/* 
    On peut aussi vérifier si une variable existe, et dans le cas contraire faire autre chose avec "??"
*/
$message1 ="Bonjour le monde <br>";
echo $message1 ?? "Rien à dire <br>";
echo $message2 ?? "Rien à dire <br>";

#----------------------------------------------------------
echo "<h1>Switch</h1> <hr>";
$pays = ["France", "Japon", "Angleterre", "Suisse", "france"];
// choisi un index aléatoire au tableau
$r2 = array_rand($pays);        
echo $pays[$r2], "<br>";        
/* 
    Le switch prend une variable en argument et déclenche le cas qui correspond
    Chaque cas doit devrait terminer par un break
    Dans le cas contraire, le cas suivant sera lancé même si il ne correspond pas.
    On peut aussi ajuter un "default" qui se déclenchera si aucun cas ne correspond
*/
switch($pays[$r2]) {
    case "Japon":
        echo "Il n'y a pas de sushi";
        break; 
    case "Suisse":
        echo "Le fromage est excellent";
    case"France":
    case"france":
        echo "Ce pays est magnifique";
        break;
    default: 
    echo "Je suis perdu...";
}
?>