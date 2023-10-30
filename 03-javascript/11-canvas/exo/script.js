"use strict"


const canvas = document.querySelector('canvas');

const ctx = canvas.getContext("2d");

function resize() {
   
    const snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
    const size = document.body.getBoundingClientRect();
   
    canvas.width = size.width;
    canvas.height = size.height;
    
    ctx.putImageData(snapshot,0 ,0);
}
resize();
window.addEventListener("resize", resize);

let painting = false;
let x=0;
let y=0; 
canvas.addEventListener("mousemove", (e)=>{
    if(painting){
    draw(ctx, x, y, e.offsetX, e.offsetY)
    x= e.offsetX ; //La propriété en lecture seule offsetX de l'interface MouseEvent fournit le décalage sur l'axe X du pointeur de la souris entre cet évènement et la bordure de la marge intérieure du noeud cible.
    y = e.offsetY;
    }
})
canvas.addEventListener("mousedown", (e)=>{
    x= e.offsetX ; 
    y = e.offsetY;
    painting = true;
    console.log(x, y);
})
canvas.addEventListener("mouseup", (e)=>{
    x= 0; 
    y = 0;
    painting = false;
    console.log(x, y);
})
function draw(ctx, x, y, offsetX, offsetY) {
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1;
    ctx.moveTo(x,y);
    ctx.lineTo(offsetX,offsetY)
    ctx.stroke();
    ctx.closePath();
}