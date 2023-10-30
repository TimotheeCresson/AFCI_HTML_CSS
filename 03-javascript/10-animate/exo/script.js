"use strict";

const mot1 = document.querySelector(".mot1");
const mot2 = document.querySelector(".mot2");
const p = document.querySelector("p");
const barre = document.querySelector(".barre")
const container = document.querySelector(".container")

async function animation() {
    const keyframes = {
        textIndent: ["200%", "1%", "0"],
        opacity: [1, 1, 0],
    };
    const anime = mot1.animate(keyframes, {
        duration: 5000,
        fill: "forwards",
    });
    barre.animate(keyframes, {
        duration: 5000,
        fill: "forwards",
    });
    // À la fin de l'animation, changez le texte du paragraphe
    anime.addEventListener("finish", function () {
        p.textContent = "Tim";
        let keyframes = {
            textIndent: ["200%", "1%", "0"],
            opacity: [1, 1, 0],
        };
        const anime = mot1.animate(keyframes, {
            duration: 5000,
            fill: "forwards",
        });
        keyframes = {
            opacity: [0, 1],
        }
        barre.animate(keyframes, {
            duration: 1000,
            fill: "forwards",
        });
    });
}

function animation2() {
    const keyframes = {
        opacity: [1, 1, 0],
        textIndent: ["-200px", "9px", "10px"],
    };
    const anime2 = mot2.animate(keyframes, {
        duration: 5000,
        fill: "forwards",
    });
    // À la fin de l'animation, changez le texte du paragraphe
    anime2.addEventListener("finish", function () {
        container.style.left = "20%"
        mot2.textContent = "Cresson";
        const keyframes = {
            textIndent: ["-200px", "9px", "10px"],
            opacity: [1,1, 0],
        };
        const anime = mot2.animate(keyframes, {
            duration: 5000,
            fill: "forwards",

        });
    });
}

animation();
animation2();
animation2();