"use strict";
const h1 = document.querySelector('#mainTitle');
console.log(h1);
console.dir(h1);

//?---------------------- L'attribut style ----------------------------------
/*
    Sur tout nos éléments HTML, nous pourrons trouver une propriété "style"
    En modifiant les propriétés de "style", nous pourrons intégrer du CSS directement sur notre balise.

    ! Attention, les propriétés CSS qui s'écrivent habituellement avec un "-" (exemple: background-color), sont remplacé par une version camelCase.
        background-color devient backgroundColor
*/
h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle ="italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

// Si on se trompe sur le nom de la propriété, aucune erreur n'est envoyé :
h1.style.couleur = "red"; // bien evidemment ça fonctionne pas 

// De même si la valeur est fausse :
h1.style.color = "rgbaa(255, 255, 255, 0.8)";   // ici rgbaa au lieu de rgba

//?----------------------- Les classes ----------------------------
/*
    Changer le style peut être pratique mais très verbeux.
    On peut aussi choisir de changer une classe, et donc avoir toutes les propriétés de cette classe qui s'appliquent ou non.

    Pour cela 2 possibilités :
        soit class Name qui permet de récupérer ou changer toutes les classes d'un coup sous forme de string.
*/
console.log(h1.className);
// Je change toutes les classes par "banane"
h1.className = "banane"; // On avait mis une classe banane avec background color jaune dans notre css
// Je supprime toutes les classes 
h1.className = "";
// Si je veux ajouter une seule classe sans supprimer les précédentes.
h1.className += " banane";

/*
    Soit classList qui retourne un objet "DOMTokenList" contenant toutes les classes sous forme de tableau (plus pratique)
*/
console.log(h1.classList);
// Supprimer une classe :
h1.classList.remove("banane");
// J'ajoute une classe :
h1.classList.add('banane');
// J'ajoute ou supprime selon si la classe est déjà présente ou non :
h1.classList.toggle("banane");  // Vu qu'on la rajouter au dessus, ici il l'a supprime
/* Retourne true si la classe est présente, ou false dans le cas contraire. 
Ici ça nous retourne false car nous avons enlevé la classe avec le dernier toggle */
console.log(h1.classList.contains("banane"));

//? -------------------------------- Les autres attributs -----------------------------
/*
    Pour la plupart des autres attributs, il est possible soit de les appeler directement via leurs nom, soit via les méthodes "getAttribute" et "setAttribute"
    Ici les 2 solutions ont le même effet
*/
console.log(h1.id, h1.getAttribute("id")); // On obtient la même chose (mainTitle)

// Donne pour le h1 l'attribut du #mainTitle, ici le mainTitle2 car +2
//h1.setAttribute("id", h1.getAttribute("id")+"2")
h1.id += "2";   

const a = document.querySelector('footer ul li a');
console.log(a);
// setAttribute prend en premier paramètre l'attribut à changer et en second, la valeur à lui donner.
a.setAttribute("target1", "_blank");
// getAttribute prend en paramètre, l'attribut à récupérer 
console.log(a.getAttribute("href"));

/*
    On peut sélectionner et modifier les data-attributes via ".dataset" suivi du nom du data-attribute
*/
console.log(a.dataset.color);
a.dataset.color="Je ne suis pas une couleur !";
// Modifier un élément qui n'existe pas, l'ajoute : 
a.dataset.bidule = "je ne sert à rien"

// TODO --------------------------------- EXOS ---------------------------------------

// Exo 1

const p = document.querySelectorAll("p");

console.log(p);
let i;

for (i=0;i < p.length; i++)
    p[i].style.fontSize = `1.${i}7rem`



// Exo 2 

const modale = document.querySelector("aside");
console.log(modale);
modale.style.transition= "transform 2s linear";
modale.style.transform = "translate(100vw,-30vw)";

// Exo 3 
/* 
const f = M



const modale2 = document.querySelector("div");
let random = Math.floor(Math.random()*16777215).toString(16);   /* le 16777215 est les 3 255 des couleurs multiplié */

modale2.style.backgroundColor = "#"+random;
//Solution 2 
/* div.style.backgroundColor = `rgb(${randNumer(255)},${randNumer(255)},${randNumer(255)})` */  /*Voir correction Cours*/