"use strict"
const feuVert = document.querySelector(".feuVert")
const feuOrange = document.querySelector(".feuOrange")
const feuRouge = document.querySelector(".feuRouge")

function trafficLightTime() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green"), 1000));
}
function trafficLightTime2() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange",feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000));
}
function trafficLightTime3() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "red",feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 3000));
}
function reset() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "gray",feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 4000));
}


function feuCirculation() {
    trafficLightTime().then()
    trafficLightTime2().then()
    trafficLightTime3().then()
    reset().then()
}

feuCirculation()






/*
const feuVert = document.querySelector(".feuVert")
const feuOrange = document.querySelector(".feuOrange")
const feuRouge = document.querySelector(".feuRouge")

function change(){
    function lightTime() {
        new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green"), 1000));
        new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange", feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000));
        new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "red", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 3000));
        new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "gray", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 4000));
        setTimeout(change, 4000) // relancer la fonction 
    }
    lightTime(change, 4000)
    }
    change()
    */


/*
function change(){
    function lightTime() {
        new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green", feuOrange.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 1000));
        new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange", feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000));
        new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "red", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 3000));
        setTimeout(change2, 4000) // relancer la fonction 
    }
    lightTime(change2, 1000)
    }
    function change2() {
        new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange", feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 1000));
        new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green", feuOrange.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000));
        setTimeout(change, 1000)
    }
    change()
   
*/


/*
function change() {

setTimeout(function () {
    feuVert.style.backgroundColor = "green"
},1000)


setTimeout(function () {
    feuOrange.style.backgroundColor = "orange"
    feuRouge.style.backgroundColor = "grey"
    feuVert.style.backgroundColor = "grey"
},2000)

setTimeout(function () {
    feuRouge.style.backgroundColor = "red"
    feuOrange.style.backgroundColor = "grey"
    feuVert.style.backgroundColor = "grey"
},3000)

setTimeout(function () {
    feuRouge.style.backgroundColor = "grey"
    feuOrange.style.backgroundColor = "grey"
    feuVert.style.backgroundColor = "grey"
},4000)
setTimeout(change, 4000)
}
change()
*/
/*
function lightTime() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green"), 1000));
}
function lightTime2() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange", feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000));
}
function lightTime3() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "red", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 3000));
}
function reset() {
    return new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "gray", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 4000));
}
*/



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
