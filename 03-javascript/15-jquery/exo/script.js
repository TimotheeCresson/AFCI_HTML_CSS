'use strict';

let idInterval;
let sliderLi;

document.addEventListener("DOMContentLoaded", function () {
    const oddlist = document.querySelectorAll('#slider ul li:nth-child(odd)')
    oddlist.forEach(items => {
        items.style.background = "#aaa"
    })
    
    const checkbox = document.querySelector('#checkbox')

    checkbox.addEventListener("change", function () {
        if(this.checked) {
            idInterval = setInterval(moveRight, 1500);
        }else {
            clearInterval(idInterval)
        }
    });

    let slider = document.querySelector("#slider")
    let sliderUl = document.querySelector("#slider ul")
    sliderLi = document.querySelectorAll('#slider ul li') 
    console.log(sliderLi);

    let sliderCount = sliderLi.length;
    let sliderWidth = sliderLi[0].offsetWidth;
    let sliderHeight = sliderLi[0].offsetHeight;
    let sliderUlWidth = sliderCount * sliderWidth

    slider.style.width = sliderWidth +"px"
    slider.style.height = sliderHeight + "px"

    sliderUl.style.width = sliderUlWidth + "px"
    sliderUl.style.marginLeft = - sliderWidth +"px"

    const sliderUlLast = document.querySelector('#slider ul li:last-child')

    sliderUl.prepend(sliderUlLast)

    function moveLeft() {
        const keyframes = [
            { left: sliderWidth + "px" }
        ];
        const options = {
            duration: 200,
            fill: "forwards"
        };
        const animation = sliderUl.animate(keyframes, options);

        animation.onfinish = () => {
            animation.cancel();
            sliderUl.prepend(document.querySelector('#slider ul li:last-child'));
        };
    }

    // Définissez la fonction d'annulation et de déplacement pour moveRight
    function moveRight() {
        const keyframes2 = [
            { left: -sliderWidth + "px" }
        ];
        const options2 = {
            duration: 200,
            fill: "forwards"
        };
        const animation = sliderUl.animate(keyframes2, options2);

        animation.onfinish = () => {
            animation.cancel();
            sliderUl.append(document.querySelector('#slider ul li:first-child'));
        };
    }

    document.querySelector('a.control_prev').addEventListener("click", moveLeft);
    document.querySelector('a.control_next').addEventListener("click", moveRight);
});


