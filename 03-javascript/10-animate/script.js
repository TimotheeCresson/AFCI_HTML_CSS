"use strict"
const div = document.querySelector(".anime");

document.querySelector(".b1").addEventListener("click", animation1);
document.querySelector(".b2").addEventListener("click", animation2);
document.querySelector(".b3").addEventListener("click", animation3);
document.querySelector(".b4").addEventListener("click", animation4);
document.querySelector(".b5").addEventListener("click", animation5);

function animation1(){
    /*
        La méthode animate de JS prend 2 arguments : 
            - le premier est une liste des keyframes qui devront être effectués
            - le second est un objet contenant les options de l'animation

        La liste des keyframes peut être au choix :
            - un tableau d'objet 
            - un objet contenant des tableaux

        Version tableau d'objet :
    */
   const keyframes =[
    {
        left: 0,
        top:0
    },
    {
        left: "80%",
        top: "-200px"
    },
    {
        left:"20%",
        top: "500px"
    }
   ];
   const options = {
    duration : 2000,
    iterations: 3,
    fill: "forwards",
    direction: "alternate"
   };
   div.animate(keyframes, options); // .animate est un méthode, voir plus haut
}

function animation2(){
    // Version objet contenant des tableaux :
    const keyframes = {
        backgroundColor: ["blue", "red", "green"],
        opacity: [1, 0, 0.5]            // Le 1er est pour blue, le 2eme (0) est pour red et 0.5 pour green
    };
    div.animate(keyframes, {
        duration: 2000,
        direction: "alternate",
        iterations: 2
    })
}
function animation3(){
    /*
        On peut sauvegarder notre objet "animate" dans une variable afin d'avoir accès à de nouvelles méthodes.
        Par exemple je pourrais ajouter un événement sur mon animation
    */
   const anime = div.animate({
    transform: ["skew(0deg, 0deg)", "skew(360deg, 180deg)", "skew(0,360deg)"]
   }, {
    duration: 1500,
    iterations: 1
   });
   anime.addEventListener("finish", ()=>{
    document.querySelector(".b4").style.opacity = 1;   // btn 4 apparrait quoi animation 3 fini
   })
}

let a4 = false; // Permeet d'effectuer l'aniamtion qu'une seule fois
function animation4(){console.log("Coucou"); // Un bouton transparent fonctionne toujours
    if(a4){ // cela veut dire  a4 doit être vrai ou une valeur( ici c'est if (a4 !=false))
        // Annule l'animation pour retourner à l'état de base
        a4.cancel();
        a4 = false; // redevient false
    }   
    else {
        a4 = div.animate({
            borderRadius: ["0", "50%", "5px", "25%"]        // Devient une animation donc obtient une valeur donc après retourne dans if(a4) car il a une valeur
        },{
            duration: 2500,
            fill: "forwards"
        });
    }
}
/*
    La méthode animate n'est qu'un raccourci pour l'utilisation des objets suivants :
        - KeyframeEffect qui prend un objet HTML puis les keyframes, puis les options
        - Animation qui prend l'objet "KeyframeEffect" puis la timeline concerné
*/
const keyframes = new KeyframeEffect(div, [
    {transform: "translate(0,0)"},
    {transform: "translate(100%, 50%)"}
], 
{
    duration: 3000,
    fill: "forwards"
}
);
const anime5 = new Animation(keyframes, document.timeline);
async function animation5(){
    //anime5.play();
    const b5 = document.querySelector('.b5');
    // ".playState" contient l'état actuel de l'animation
    console.log(anime5.playState);
    switch(anime5.playState) {
        case "idle":
            anime5.play();
            b5.textContent = "Pause"
            // ".finished" contient une promesse qui se résout une fois l'animation terminé
            //console.log(anime5.finished);
            await anime5.finished;
            b5.textContent= "Reverse";
            break;
        case "running":
            anime5.pause();
            b5.textContent="Continue"
            break;
        case "paused":
            anime5.play();
            b5.textContent = "Pause";
            break;
        case "finished":
            anime5.reverse();
            b5.textContent = "Pause";
            await anime5.finished;
            b5.textContent = "Start";
            break;
    }
}