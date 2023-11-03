"use strict";
import JustePrix from "./justePrix.js";
import paint from "./paint.js";
import slider from "./slider.js";

const appli = document.querySelector('.appli');
const select = document.querySelector('#appli');
// Référence au projet en cours
let currentProject = null;
// let previousOption = null;

select.addEventListener("click", selectAppli);

function selectAppli() {
  const optionSelected = select.value;
    // appli.textContent = "";
    if (currentProject) { // cache le projet en cours
        // currentProject.style.display = "none";
        appli.textContent = "";
    }

    if (optionSelected === 'justePrix') {
        const test = JustePrix.InitGame();
        appli.append(test);
        currentProject = test;
    } else if (optionSelected === 'paint') {
        paint.initDraw();
        appli.append(paint.canvas);
       
        currentProject = paint.canvas;
    } else if (optionSelected === 'slider') {
        const images = [
        "../../../../ressources/image/paysage/chien1.jpg",
        "../../../../ressources/image/paysage/chien2.jpg",
        "../../../../ressources/image/paysage/chien3.jpg",
        "../../../../ressources/image/paysage/chien4.jpg"
        ];
        const slide = slider.create(images);
        appli.append(slide);
        slider.init();
        currentProject = slide;
    }
  
}



