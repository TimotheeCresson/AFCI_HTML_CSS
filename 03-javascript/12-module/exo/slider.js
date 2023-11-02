"use strict"
// on crée notre fonction pour créer les images
export function create(images) {
    const sliderElement = document.createElement('div')
    const imageElements = [];
    const buttonElements = [];
    images.forEach((images, index)=> {
        const imageElement = document.createElement('img')
        imageElement.classList.add("slider-image")
        imageElement.src = images
        imageElement.style.display = index === 0 ? 'block' : "none"; // ici on dit que si index = 0 soit la première image, elle sera en display block et si la valeur de index est supérieur à 0 alors les images seront en display none soit les images suivantes
        imageElements.push(imageElement);
        const buttons = document.createElement("button")
        buttonElements.push(buttons);
        console.log(buttons);
       
    })
      imageElements.forEach((imageElement) => sliderElement.append(imageElement));
      buttonElements.forEach((button) => sliderElement.append(button));
    return sliderElement
}

export default function startSlider() {
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    function showImage(index) {
      sliderImages.forEach((image, i) => {
        if (i === index) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
    function nextImage() {
        currentIndex++
        console.log(currentIndex);
        if (currentIndex >= sliderImages.length){   // quand mon current index est superieur ou égal à la taille du tableau d'image( ici 4 car 4 images) on revient à 0
            currentIndex=0;
    }
    showImage(currentIndex);
}
    document.addEventListener('click', nextImage);
}

