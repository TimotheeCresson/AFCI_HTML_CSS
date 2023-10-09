"use strict";

function test(e) {
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/*
    Lorsqu'un utilisateur intéragie avec la page, il bouge la souris, il clique, il tape au clavier, il scroll...
    Cela produit un évènement, nous allons pouvoir dire à javascript d'écouter ces évènements et de faire une action à ce moment.

    Pour cela, plusieurs méthode, la première étant :
    .addEventListener("event", fonction)
    Il prendra en premier paramètre le nom de l'événement à écouter (toujours en minuscule) et en second la fonction à lancer lorsque l'évènement ce produit.
*/
// Dès qu'on click sur le h1, on obtient un message dans la console
h1.addEventListener("click", test)
/*
    Par défaut, addEventListener va passer à la fonction donné, un paramètre contenant un objet correspondant à l'événement. 
    Ici un objet "Click" qui contient entre autre.
        La position de la souris au clique
        La cible de l'événement (où on a cliqué)

    On peut ajouter autant d'événement que l'on souhaite sur un même élément.
    On peut aussi utiliser des fonctions anonyme fléché.
*/
let x=0;
h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random()*360);  // 360 pour 360 deg
    e.target.style.transform = `rotate(${r}deg)`;       // e est la fonction test que nous avons déclarer plus haut, nous sommes obligés de mettre e car "e" pour événement
    x++;
    if(x===5)e.target.style.color = "red"; // Au bout de 5 click, le h1 devient rouge
})
/*
    On peut aussi ajouter un événement via la propriété qui correspond.
    Chaque élément HTML a de multiples propriété commençant par "on" suivi du nom de l'événement (onclick, on load...)
    Si cette propriété est remplie avec une fonction, cela aura le même effet.
*/
const menu1 = document.querySelector(".menu1");
menu1.onclick = test;
// On ne peut ajouter qu'un seul événement sur une propriété :
menu1.onclick = (e)=>{
    if(e.target.style.fontSize === "")
        e.target.style.fontSize="2em";  //grossit quand au click dessus
    else
        e.target.style.fontSize="";
}
/*
    Une 3e façon d'ajouter un écouteur d'événement existe, mais celle-ci est plutôt déconseillé car mélangeant HTML et JS.
    L'exemple se trouve dans le HTML sur "menu 2"

    Si on souhaite supprimer un écouteur d'événement, pour l'attribut, il suffit de le vider :
*/
menu1.onclick = ""   // l'événement de grossisement mit avant ne fonctionne plus

/* 
    Pour le addEventListener, on utilisera removeEventListener, en lui donnant les même paramètres: 
*/
h1.removeEventListener("click", test); // retire le texte apparaissant dans la console lorsque l'on clique
// Petit défaut, on ne peut retirer que les event utilisant une fonction nommé.

//? ------------------------ Input Event ------------------------
const div1 = document.querySelector('.div1');
const input1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');
/*
    L'événement "input" réagis à chaque modification d'un élément de formulaire (input, textarea, checkbox, radio...)
    Il existe aussi l'événement "change" qui réagi une fois l'input validé (par exemple sur un textarea, ou un input:text, cela sera une fois l'input quitté)
*/
input1.addEventListener("input", (e)=>{
   /* console.log(e); récupére info dans la console */
    /*
    Sur tous les éléments HTML de formulaire, on trouvera l'attribut "value" qui permet de récupérer son contenue (sa valeur)
   */
    
    if(e.target.value !="")
        btn1.textContent = e.target.value; /* écrit le texte que l'on écrit dans la console */
    else
        btn1.textContent = "Clique moi !"; /* Le bouton change : il devient le texte que l'on écrit */
})

/* Voir ce lien https://quirksmode.org/js/introevents.html */

//? ---------------------------- Options ----------------------------

/*
// test Exo de moi même

const div3 = document.querySelector('.div3');
const input3 = div3.querySelector('input');
const btn3 = div3.querySelector('button');
console.log(btn3);

// façon 1:

btn3.addEventListener('mouseover', (e)=>{
if(e.target.style.backgroundColor === "")
    btn3.style.backgroundColor = "red";
else btn3.addEventListener('mouseleave', (e)=>{
    btn3.style.backgroundColor = "";
}) 
})

//façon 2: 

btn3.onmouseenter = (e)=>{
    if(e.target.style.backgroundColor === "")
        e.target.style.backgroundColor="red";
    else btn3.onmouseleave = (e)=> {
        e.target.style.backgroundColor="";
}}
*/


/*
    On peut ajouter des options à notre addEventListener
    Pour cela on ajoutera un objet "{}" en 3e argument
        ElementHTML.addEventListener("event", function,{option:valeur});
*/
btn1.addEventListener("click",()=>h1.textContent=input1.value,{once:true}); // Quand l'on écrit dans le texte clique moi! et quon valide, le h1 deivent ce qu'on l'a écrit mais marche qu'une fois (once)

const div4 = document.querySelector('.div4');
const gp = document.querySelector('.grandParent');
const pa = document.querySelector('.parent');
const en = document.querySelector('.enfant');

/*
    Si plusieurs événements sont déclenchés par une même action (par exemple un clique),
    alors l'ordre sera défini, du parent le plus proche au plus éloigné

    JS fonctionne en 2 phases, une phase de "capture" où il vérifie les événements à déclencher allant des parents vers les enfants.
    Et une phase de "bulle" qui remonte en activant les événements.
*/

/* De base on a
div4.addEventListener("click", ()=>console.log("div4"),{capture:true});
gp.addEventListener("click", ()=>console.log("gp"));        
pa.addEventListener("click", ()=>console.log("pa"));
en.addEventListener("click", ()=>console.log("en"));
// dans la console on obtient en , pa, gp et div 4
*/

div4.addEventListener("click", ()=>console.log("div4"),{capture:true}); // capture fait que la div 4 est en première dans console (on a div4, en, pa, gp)
gp.addEventListener("click", ()=>console.log("gp"));        
pa.addEventListener("click", (e)=>{
    e.stopPropagation();              // Ici avec stop Propagation il ne fait pas les instructions lorsque l'on remonte donc on aura pas gp car on a de base div4, en, pa et gp donc gp ne sera pas lu
    console.log("pa");
});
en.addEventListener("click", ()=>console.log("en"));
/*
    L'option "{capture:true}" permet d'activer l'événement lors de la phase de capture, donc avant ceux en phase de bulle.

    Ajouter un "event.stopPropagation()" dans une fonction, permet d'empêcher l'éxécution des événements qui devraient être activé par la suite.
*/

const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", e=>e.preventDefault())
/*
    "event.prevantDefault()" permet d'annuler l'action par défaut de cet événement. 
        Un clique sur un lien ne redirigera pas.
        Une soumission de formulaire ne sera pas effectué...
*/
