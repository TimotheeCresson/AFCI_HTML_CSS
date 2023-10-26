"use strict"

const feuVert = document.querySelector(".feuVert")
const feuOrange = document.querySelector(".feuOrange")
const feuRouge = document.querySelector(".feuRouge")

function first(feuvert) {
    return new Promise(resolve=>setTimeout(()=>resolve(feuvert.style.backgroundColor = "green"), 1000));
}

