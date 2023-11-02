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

