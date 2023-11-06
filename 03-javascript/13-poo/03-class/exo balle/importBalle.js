"use strict"
import Balle from "./balle.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
const balles = []
canvas.width = 1250
canvas.height = 850

// lorsque l'on clique, on crée des balles dans le canvas que l'on push dans le tableau balles
canvas.addEventListener("click", ()=>{
    balles.push(new Balle(canvas))
    console.log(balles);
})

function animate() {
    requestAnimationFrame(animate); // pour démarrer l'animation
    ctx.clearRect(0, 0, canvas.width, canvas.height) // Cette ligne efface tout le contenu du canvas, ce qui est nécessaire pour chaque trame de l'animation. Cela garantit que chaque trame est propre et que les balles sont redessinées à leur nouvelle position.
    balles.forEach((balle) =>{
    balle.drawCercle();   // pour chaque balle on appelle les fonctions drawcercle et move
    balle.move();
})
}
animate()