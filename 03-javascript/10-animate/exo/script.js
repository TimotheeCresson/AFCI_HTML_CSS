"use strict";

const mot1 = document.querySelector(".mot1");
const mot2 = document.querySelector(".mot2");
const p = document.querySelector("p");

function animation() {
    const keyframes = {
        textIndent: ["200%", "0"],
        opacity: [1],
    };
    
    const anime = mot1.animate(keyframes, {
        duration: 3000,
        fill: "forwards",
    });

    // À la fin de l'animation, changez le texte du paragraphe
    anime.addEventListener("finish", function () {
        p.textContent = "Tim";
    });
}

function animation2() {
    const keyframes = {
        opacity: [1],
        textIndent: ["-200px", "10px"],
    };
    const anime2 = mot2.animate(keyframes, {
        duration: 3000,
        fill: "forwards",
    });

    // À la fin de l'animation, changez le texte du paragraphe
    anime2.addEventListener("finish", function () {
        mot2.textContent = "Cresson";
    });
}

animation();
animation2();
animation2();