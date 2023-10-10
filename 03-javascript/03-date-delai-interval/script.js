"use strict";

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');
const progress = document.querySelector('.progress');

/*
    Certains objets sont créé à partir de classe.
    Nous rentrerons dans les détails dans le cours sur la POO.

    Mais pour créer ces objets, nous devons faire précéder leurs noms du mot clef "new".

    Cela va créer une nouvelle instance de l'objet.
    C'est le cas de l'objet "Date" qui contiendra l'heure et la date du moment de sa création.
*/
const date = new Date();
console.log(date);
//Cet objet contient tous un tas de méthodes pour récupérer les différentes informations sur la date et l'heure : (on optient le 2022-2023 au niveau du footer, get full year optient l'année dans laquelle nous sommes soit 2023) 
copyright.textContent = date.getFullYear();

// .toLocaleTimeString() nous rend l'heure, les minutes et les secondes sous forme de string (on obtient l'heure et les secondes actuelles):
mainTime.textContent= date.toLocaleTimeString();


function timer() {
    const dateTimer = new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();
}
/*
    setInterval permet de relancer une fonction à un rythme régulier.
    Il prend la fonction à relancer en 1er paramètre.
    Et le temps entre chaque appel en second paramètre (en milliseconde)

    La fonction setInterval retournera un id que l'on pourra optionnellement réutiliser ailleurs.
*/
let idInterval = setInterval(timer, 1000); // 100 est 1000 milliseconde soit une seconde
console.log(idInterval);            //idInterval permet de créer un intervalle avec un numéro et de la définir

// La fonction "clearInterval()" permet de supprimer un interval. Elle prendra en paramètre, l'id de l'interval à supprimer.
mainBtn.addEventListener("click", ()=>clearInterval(idInterval))  // lorsque l'on click sur le bouton stop, le timer s'arrête

/*
    setTimeout() fonctionne comme setInterval, prend les mêmes paramètres, retourne elle aussi un identifiant qui peut être utilisé pour l'arrêter avec "clearTimeout()"

    La seule différence est qu'au lieu de relancer la fonction à rythme régulier, elle ne la lancera qu'une fois, après avoir attendu le temps donné en paramètre.
*/
let idTimeout = setTimeout(()=>console.log("Coucou en retard !"), 3000); // notre message arrive 3 seconde après dans la console

//clearTimeout(idTimeout);          permet d'annuler la l'arriver du message coucou en retard

let w = 0;
function load() {
    /*console.log(w);*/
    if (w === 100) return;
        w++
        progress.style.width = w+"%"
    setTimeout(load, 100)
}
load()

// TODO ----------------------------------- Exo horloge ------------------------------------------------------
const heure = document.querySelector(".heure");
const minute = document.querySelector(".minute");
const seconde = document.querySelector(".seconde");

clock ()
function clock() {
    const time = new Date();
    const heures = time.getHours()*30;
    const minutes= time.getMinutes()*6;
    const secondes = time.getSeconds()*6;
    

    heure.style.transform = `rotate(${heures +(minutes / 12)}deg)`
    minute.style.transform = `rotate(${minutes}deg)`
    seconde.style.transform = `rotate(${secondes}deg)`
}
setInterval(clock, 1000)
