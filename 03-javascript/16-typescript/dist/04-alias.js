"use strict";
/*
    Avec le mot clef "type", je peux déclarer un type et l'utiliser sur mes variables.
*/
let f = { nom: "Pomme", couleur: "Rouge" };
let aF = [f, { nom: "Banane", couleur: "Jaune" }]; // f est la variable du dessus
let p = { nom: "Maurice", age: 54 };
let n = "George";
let fp = "age"; // on a le droit de même que le nom des propriétés
fp = "nom";
/* document.body.textContent = `${fp} : ${p[fp]}` exemple pour le dessus */
/*
    La propriété typeof permet de créer un type à partir d'un objet déjà existant.
*/
let objet = { vieux: true, prenom: "Maurice", age: 78 };
let objet2 = { vieux: false, prenom: "Pierre", age: 23 };
const test = "Bonjour"; // Comme c'est une constante et qu'il ne peut pas bouger, ici il est de type "Bonjour"
// ------------------------ GENERICS ---------------------------
function useless(arg) {
    return arg;
}
let machine = useless("Salut");
/*
    Par défaut, dans l'exemple ci-dessus, notre fonction ne fait que retourné son argument sans rien faire.
    Mais typescript est incapable de faire le lien entre le type de l'argument et celui de la valeur de retour.
    Ma variable vaut donc "any".
    
    Avec les Generics comme <Type1>(arg:Type1): Type1, il est possible d'indiquer à notre fonction qu'elle va recevoir un type "nommé" et que celui-ci sera le même que la valeur de retour.
    Ici, mes variables sont du type de l'argument donné à la fonction.
    
    Il est possible de limiter les types possibles avec :
        *  <NomDuType = number|string>
*/
function useful(arg) {
    return arg;
}
let machine2 = useful("Bonjour");
let machine3 = useful(54);
/*
    Ici, j'indique que l'argument est un tableau du type "nommé" et que la valeur de retour est non plus un tableau mais uniquement le type contenu dans ce tableau.
*/
function lastOf(arr) {
    return arr[arr.length - 1];
}
let last = lastOf([34, 23, 91]); // de type number
let last2 = lastOf(["34", "23", "91"]); // de type string
let last3 = lastOf(["34", 23, "91"]); // ici c'est de type number|string
/*
    Ici, ma fonction accepte n'importe quel argument, tant que cet argument possède la propriété "length" qui est un "number".
*/
function logSize(arg) {
    console.log(arg.length);
    return arg; // comme on a demandé une valeur de retour de TypeL
}
let s1 = logSize([45]);
let s2 = logSize("Chaussette");
// let s3 = logSize(42); fonctionne pas
let s4 = logSize({ nom: "Maurice", length: 345 });
