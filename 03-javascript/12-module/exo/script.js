"use strict";
const images = ["../../../ressources/image/paysage/sea.jpg","../../../ressources/image/paysage/lava.jpg","../../../ressources/image/paysage/montagne.jpg","../../../ressources/image/paysage/phare.jpg"];

window.addEventListener("click", addSlider)
async function addSlider(){
    const sliderJS = await import("./slider.js")
    const slider = sliderJS.create(images);
    document.body.append(slider);
    sliderJS.default();
    window.removeEventListener("click", addSlider);
}
