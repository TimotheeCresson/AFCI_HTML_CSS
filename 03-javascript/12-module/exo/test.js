// // // slider.js

// // function createSlider(imagePaths) {
// //     // Créer l'élément du slider et ajouter des styles (vous pouvez également utiliser un fichier CSS)
// //     const sliderElement = document.createElement('div');
// //     sliderElement.classList.add('slider');
    
// //     // Créer les éléments d'image pour chaque chemin d'image
// //     imagePaths.forEach((imagePath, index) => {
// //       const imageElement = document.createElement('img');
// //       imageElement.src = imagePath;
// //       imageElement.classList.add('slider-image');
// //       imageElement.style.display = index === 0 ? 'block' : 'none'; // Afficher la première image, masquer les autres
// //       sliderElement.appendChild(imageElement);
// //     });
  
// //     return sliderElement;
// //   }
  
// //   function startSlider() {
// //     const sliderImages = document.querySelectorAll('.slider-image');
// //     let currentIndex = 0;
  
// //     function showImage(index) {
// //       sliderImages.forEach((image, i) => {
// //         if (i === index) {
// //           image.style.display = 'block';
// //         } else {
// //           image.style.display = 'none';
// //         }
// //       });
// //     }
// function nextImage() {
//     currentIndex++; // Augmenter l'indice
  
//     if (currentIndex >= sliderImages.length) {
//       currentIndex = 0; // Revenir à la première image si on dépasse la dernière
//     }
  
//     showImage(currentIndex);
//   }
  
// //     // Ajouter des gestionnaires d'événements pour les actions de l'utilisateur (par exemple, clic, touches)
// //     document.addEventListener('click', nextImage);
  
// //     // Lancer le slider en affichant la première image
// //     showImage(currentIndex);
// //   }
  
// //   export { createSlider as default, startSlider };