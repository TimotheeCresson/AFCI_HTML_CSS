"use strict"
import S from "./slider.js"

const images = [
    "../../../../ressources/image/paysage/chien1.jpg",
    "../../../../ressources/image/paysage/chien2.jpg",
    "../../../../ressources/image/paysage/chien3.jpg",
    "../../../../ressources/image/paysage/chien4.jpg"
    ];
const images2 = [
    "../../../../ressources/image/paysage/lava.jpg",
    "../../../../ressources/image/paysage/sea.jpg",
    "../../../../ressources/image/paysage/phare.jpg",
    "../../../../ressources/image/paysage/space.jpg"
]
    const slider = new S({
        slider: {
            dots: [],
            items: [],
            btns: []
        }
    });
console.log(slider);
const slide = slider.create(images)
document.body.append(slide)
slider.init()

const slider2 = new S({slider})
console.log({slider});
console.log(slider);
const slide2 = slider2.create(images2)
document.body.append(slide2)
slider2.init()