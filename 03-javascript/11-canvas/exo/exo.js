"use strict"


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const input = document.getElementById('color');
const lineWidthInput = document.getElementById('lineWidth')
// const Historique = [ctx.getImageData(0, 0, canvas.width, canvas.height)];
// let histoIndex = 0
let painting = false;
let color = input.value
let x=0;
let y=0; 

function resize() {
   
    const snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
    const size = document.body.getBoundingClientRect();
   
    canvas.width = size.width;
    canvas.height = size.height;
    
    ctx.putImageData(snapshot,0 ,0);
}
resize();
window.addEventListener("resize", resize);


input.addEventListener("change", ()=>{
    color = input.value
})

/*
===========================
Ici on ajoute des événements en rapport à la souris
===========================
*/
canvas.addEventListener("mousemove", function(e){
    if(painting){
    draw(ctx, x, y, e.offsetX, e.offsetY)
    x= e.offsetX  //- rect.left; La propriété en lecture seule offsetX de l'interface MouseEvent fournit le décalage sur l'axe X du pointeur de la souris entre cet évènement et la bordure de la marge intérieure du noeud cible.
    y = e.offsetY // - rect.right;  rect.left or right permet que lorsque le canvas ne prend pas toute la largeur de la page de dessiner à l'intérieur même si on dessine à l'extérieur, elle retranscrit les données (si a 50px du canvas, va reprendre à 50px dans canvas)
    }
})
canvas.addEventListener("mousedown", (e)=>{
    x= e.offsetX ; 
    y = e.offsetY;
    painting = true;
    // console.log(x, y);
})
canvas.addEventListener("mouseup", ()=>{
    x= 0; 
    y = 0;
    painting = false;
    saveDrawingState() // On appelle la fonction saveDrawingState() pour plus bas

    // Historique[++histoIndex]= ctx.getImageData(0, 0, canvas.width, canvas.height)
    // console.log(x, y);
})


/*
======================
Ici on crée une fonction nous permettant de dessiner
======================
*/
function draw(ctx, x, y, offsetX, offsetY) {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidthInput.value;
    ctx.lineCap = "round";
    ctx.moveTo(x,y);
    ctx.lineTo(offsetX,offsetY)
    ctx.stroke();
    ctx.closePath();
}


/*
===================
On sauvegarde dans un historique nos dessins
======================
*/
const drawingHistory = [];
let currentStep = -1;

function saveDrawingState() {
    currentStep++;
    if (currentStep < drawingHistory.length) {
        drawingHistory.length = currentStep;
        
    }
    drawingHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
     console.log(drawingHistory);
}
// Event créer sur les boutons ctrl + z et ctrl + y
document.addEventListener('keydown', function(e) {
    if (e.key === "z" && e.ctrlKey) {
        e.preventDefault();
        undo(); // Appeler la fonction undo pour annuler
        
        }
        if (e.ctrlKey && e.key === "y") {
            e.preventDefault();
            redo();
        }
    }
);

// function afin d'effacer l'action précédente
function undo() {
    if (currentStep > 0) {
        currentStep--;
        ctx.putImageData(drawingHistory[currentStep], 0, 0);
    }else
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // drawingHistory.length = 0;
        currentStep = -1;
        console.log(currentStep);
    }
}

// function afin de remettre l'action précédente effacé 
function redo() {
    if (currentStep < drawingHistory.length - 1) {
        currentStep++;
        ctx.putImageData(drawingHistory[currentStep], 0, 0);
        console.log(currentStep);
    }
}