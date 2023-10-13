"use strict"
// Exo 1
const
main = document.querySelector("main"),
    mainp = main.querySelectorAll("p"),
    options = {
        threshold : 0.5
    };

const observer = new IntersectionObserver(setIndicator, options);


mainp.forEach((p) => {
    p.style.visibility ="hidden";
    observer.observe(p)
    console.log(p);
});

function setIndicator(entries, observer) {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.style.visibility ="visible"
            observer.unobserve(entry.target);
        }
    });
}

// exo 2

/*
if(let i=0; i < 10; i++) {

}
*/








/*
 1. Lorsque le dernier paragraphe est à 200px en dessous du viewport.
const lastParagraph = mainp[mainp.length - 1];
const newParagraphs = [];
for (let i = 0; i < 10; i++) {
    const newP = document.createElement("p");
    newP.textContent = "Nouveau paragraphe " + (mainp.length + i + 1);
    main.appendChild(newP);
    newParagraphs.push(newP);
}

 2. Désactiver la détection du précédent dernier paragraphe.
const prevLastParagraph = mainp[mainp.length - 2];
if (prevLastParagraph) {
    observer.unobserve(prevLastParagraph);
}

 3. Ajouter l'animation de l'exercice 1 aux nouveaux paragraphes.
newParagraphs.forEach((newP) => {
    newP.style.visibility = "hidden";
    observer.observe(newP);
});

 4. Ajouter la détection du dernier paragraphe au nouveau dernier paragraphe.
const newLastParagraph = mainp[mainp.length + 9];
if (newLastParagraph) {
    observer.observe(newLastParagraph);
}
*/