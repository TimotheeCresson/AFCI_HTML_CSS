"use strict";

// Fonction pour créer le carrousel
export function create(images) {
  const sliderElement = document.createElement('div');
  const imageElements = [];
  const buttonElements = [];

  images.forEach((image, index) => {
    const imageElement = document.createElement('img');
    imageElement.classList.add("slider-image");
    imageElement.src = image;
    imageElement.style.display = index === 0 ? 'block' : 'none';
    imageElements.push(imageElement);

    // Créez un bouton pour chaque image
    const button = document.createElement('button');
    button.textContent = `Image ${index + 1}`;
    button.addEventListener('click', () => showImage(index));
    buttonElements.push(button);
  });

  // Ajoutez les boutons et les images au carrousel
  imageElements.forEach((imageElement) => sliderElement.appendChild(imageElement));
  buttonElements.forEach((button) => sliderElement.appendChild(button));

  return sliderElement;
}

export default function startSlider() {
  const sliderImages = document.querySelectorAll('.slider-image');
  const sliderButtons = document.querySelectorAll('button');
  let currentIndex = 0;

  function showImage(index) {
    sliderImages.forEach((image, i) => {
      if (i === index) {
        image.style.display = 'block';
        sliderButtons[i].classList.add('active'); // Ajoute une classe "active" au bouton correspondant
      } else {
        image.style.display = 'none';
        sliderButtons[i].classList.remove('active'); // Supprime la classe "active" des autres boutons
      }
    });
  }

  // Gérez le clic sur les boutons pour passer d'une image à l'autre
  sliderButtons.forEach((button, index) => {
    button.addEventListener('click', () => showImage(index));
  });

  // Initialiser le premier bouton comme actif
  sliderButtons[currentIndex].classList.add('active');

  function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
  }

  document.addEventListener('click', nextImage);
}