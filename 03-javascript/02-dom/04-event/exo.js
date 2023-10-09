"use strict"
/* mettre le script dans le html */

function test(e) {
    console.log(e);
}

/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/
const div2 = document.querySelector('.div2');
const input2 = div2.querySelector('input')
const btn2 = div2.querySelector ('button')

input2.addEventListener("input", ()=>
    btn2.style.color= input2.value
);

btn2.addEventListener("click", ()=>
    div2.style.backgroundColor = input2.value
);
/*
btn2.onclick= e=>
    div2.style.backgroundColor = input2.value

*/

/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/

const modal = document.querySelector(".modal")
const div3 = document.querySelector(".div3")
const btn3 = div3.querySelector("button")
const modalbtn = modal.querySelector (".modal button:last-of-type")

/*btn3.addEventListener("click", ()=> 
    modal.classList.remove("hidden")
)*/
btn3.onclick = ()=>
modal.classList.remove("hidden")

modalbtn.onclick = ()=> 
modal.classList.add("hidden")
/*modalbtn.addEventListener('click', ()=>
    modal.classList.add("hidden")
)*/
/*
function modalToggle()
{
    modal.classList.toggle("hidden"); 
}
btn3.addEventListener("click", modalToggle);
modalbtn.addEventListener("click", modalToggle)
*/

/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/


const lis = document.querySelectorAll("li");

lis.forEach((li) => {
    li.addEventListener("click", ()=>{
    if(li.style.fontSize === "")
       li.style.fontSize = "2em";
    else 
    li.style.fontSize="";
})
});

/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/

const footer = document.querySelector("footer");
const span = footer.querySelector(".endOfFile");

span.addEventListener("mouseenter", ()=>
    span.style.position = "absolute"
)
document.addEventListener("mousemove", e=>{         // on ajoute un évenement sur toute la page (document)
    span.style.top = `${e.clientY}px`
    span.style.left = `${e.clientX}px`
})
span.addEventListener("click", ()=>
    span.style.position =""
)


