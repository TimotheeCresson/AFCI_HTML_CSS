"use strict"
const feuVert = document.querySelector(".feuVert")
const feuOrange = document.querySelector(".feuOrange")
const feuRouge = document.querySelector(".feuRouge")

function lightTime() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green"), 1000));
}
function lightTime2() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange"), 3000));
}

    
    setInterval(function () {
        // Passage au vert, supprime le précédent
        feuOrange.style.backgroundColor = "gray";
        feuRouge.style.backgroundColor = "gray";
        lightTime2(function (color) {
            feuVert.style.backgroundColor = color;
        }, "green", 3000);
    })
function feuCirculation() {
    lightTime().then()
    lightTime2().then()
}

feuCirculation()


/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function runTrafficLight() {
    while (true) {
        // Passage au vert
        feuVert.style.backgroundColor = 'green';
        await sleep(3000);

        // Passage au jaune
        feuOrange.style.backgroundColor = 'yellow';
        await sleep(1000);

        // Passage au rouge
        feuRouge.style.backgroundColor = 'red';
        await sleep(2000);

        // Réinitialisation
        feuVert.style.backgroundColor = 'gray';
        feuOrange.style.backgroundColor = 'gray';
        feuRouge.style.backgroundColor = 'gray';
    }
}

runTrafficLight();
*/
