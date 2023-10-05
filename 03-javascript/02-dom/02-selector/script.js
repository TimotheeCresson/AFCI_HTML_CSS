"use strict"
/*
    document.getElementsByTagName()
    Il permet de récupérer tous les éléments dont le nom de la valise vaut le paramamètre donné :

    Si je veux tous les li de la page :
*/
const lis = document.getElementsByTagName("li");        /* Ici on sélectionne tous les "li" de la page */
console.log(lis, lis[0]); /* On demande la liste des li et ensuite le premier li, on pourrait à la place de lis écrire li, c'est juste un nom de variable */
/*
    Peu importe qu'il y a aucun, un ou plusieurs résultats, ce sera rangé dans un objet appelé "HTMLCollection" (qu'on retrouve dans la console).
    Il fonctionnera un peu comme un tableau.
    Si je veux le premier élément, je tape [0]

    Ici j'ai cherché dans tout mon document, si je voudrais chercher par exemple, que dans le footer, 
    il me faudrait d'abord sélectionner le footer,
        const footer = document.getElementsByTagName("footer");
        puis lui dire : 
        footer.getElementsByTagName("li")
*/
lis[0].textContent = "Marbre";

/*
    document.getElementsByClassName()
    Il fonctionnera exactement comme getElementsByTagName()
    si ce n'est qu'il sélectionnera les éléments via le nom de leurs classes.
*/
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps,p1);

/*
    document.getElementById()
    Il va récupérer l'élément HTML qui possède l'id donnée en paramètre.
    Pas de HTMLCollection ici
*/
const h1 = document.getElementById("mainTitle");
console.log(h1);

/*
    querySelector()
    Il va sélectionner le premier élément qui correspond à son paramètre.

    Il prendra en paramètre, un string, contenant n'importe quel sélecteur CSS

    Tout ce qu'on a utiliser précedemment est moins utiliser que ce dernier, nous pouvons tout sélectionner avec cela
    Mais Attention, ici, il ne sélectionne que le premier élément (si on demande le p dans step, il sélectionnera que le premier)
*/
const p2 = document.querySelector(".marche2");
console.log(p2);
/*const p2 = document.querySelector(".main > p:nth-of-type(2)")
const p2 = document.querySelector("body main>p.marche2.step")*/

/* 
    querySelectorAll()
    Il sélectionnera tous les éléments qui correspond à son paramètre 
    à la différence des autres méthodes de sélection,
    on obtient pas un objet "HTMLCollection" mais un tableau "Nodelist"
*/
const lis2 = document.querySelectorAll("footer li");
console.log(lis2, lis2[0]);

/*lis2[0].textContent = "test";*/

/*
    Pareillement qu'avec les précédents, je peux faire ma recherche dnas un élément précis :
*/
const header = document.querySelector('header');
const h = header.querySelector('h1');
console.log(h);

//? ------------------------- Quelques Selecteurs Bonus --------------------------------------------------
// Sélectionne le prochain élément frère en HTML, ici le main
console.log(header.nextElementSibling); /* utile pour sélectionner un élément variable, ici on sélectionne le main car c'est l'élément qui se trouve après le header  */

// Sélectionne ce qui suit dnas le HTML, ici le saut à la ligne et l'indentation (Disposition particulière du texte d'un programme faisant apparaître des décalages au niveau de la marge.)
console.log(header.nextSibling);

// Sélectionne l'élément HTML précédent, ici le second li (car lis2[2] est le 3ème li)
console.log(lis2[2].previousElementSibling);

// Retourne un objet HTMLCollection contenant tous les enfants directs (ici on sélectionne donc le #Maintitle)
console.log(header.children);

// retourne le parent de l'élément (ici ul pour lis et body pour header)
console.log(lis[2].parentElement, header.parentElement);

// Retourne le parent le plus proche qui correspond au sélecteur CSS
console.log(lis[2].closest("footer"));


//? ------------------------- Supprimer ou Déplacer --------------------------------------------------
// Pour déplacer un élément, il suffit de l'append ailleurs :
header.append(lis2[0])

// Remove supprime l'élément du HTML
lis2[2].remove();
// Mais il existe toujours dans la variable JS.
console.log(lis2[2]);

// Il existe aussi pour supprimer (mais pas d'intérêt)
// header.removeChild(h)

// TODO-------------------------------------- Exercice ------------------------------------------
// Exo 1
// Déplacer la modale dans le body
const body = document.querySelector('body');
const modale = document.querySelector('aside div')
body.append(modale)

// Exo 2 
// Modifier le texte des 3 li du footer, si possible avec une boucle
//façon 1:
const footer = document.querySelector("footer");
footer.append(lis2[0])
footer.append(lis2[2])
let i=0;
for(i = 0; i < lis2.length; i++){
    lis2[i].textContent = "burger"
}

//façon 2:
/*
lis2.forEach(textChange);
function textChange(el){
    el.textContent = "Changer le texte"
}*/



// Exo 3
// Remplaceer le texte des paragraphes pair
const pair = document.querySelectorAll('main p:nth-of-type(2n+2)') // ou ('main p:nth-child(even)')
console.log(pair);
for(i=0; i< pair.length; i++){
    pair[i].textContent ="il était une fois il était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une fois"
}
/*
const pair = document.querySelectorAll('main p') 
for(i=0; i< pair.length; i++){
if (i%2){
    pair[i].textContent ="il était une fois il était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une fois"
}} */
/*
for(let i=1; i< pair.length; i+=2) {
    pair[i].textContent ="il était une fois il était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une foisil était une fois"
}
*/
/*
const pair = document.querySelectorAll('main p:nth-child(even)');
pair.forEach(textChange) 
function textChange(el){
    el.textContent = "Changer le texte"
}*/