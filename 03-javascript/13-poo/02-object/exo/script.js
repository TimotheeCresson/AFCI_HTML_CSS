"use strict"
import paint from "./paint.js";
import slider from "./slider.js";
import JustePrix from "./justePrix.js"

paint.initDraw()
JustePrix.InitGame()

const images = ["../../../../ressources/image/paysage/chien1.jpg","../../../../ressources/image/paysage/chien2.jpg","../../../../ressources/image/paysage/chien3.jpg","../../../../ressources/image/paysage/chien4.jpg"];
const appli = document.querySelector('.appli');
const slide = slider.create(images);
appli.append(slide)
slider.init();

const select = document.querySelector('#appli');
select.addEventListener("input", selectAppli)

if (option.value === 'justePrix') {
    // Display the Juste Prix project
    appli.append(JustePrix);
}
else if (option.value === 'paint') {
    // Display the Paint project
    appli.append(paint);
} else if (option.value === 'slider') {
    // Display the Slider project
    const slide = slider.create(images);
    appli.append(slide);
    slider.init();
}




