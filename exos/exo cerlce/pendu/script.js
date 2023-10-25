"use strict"

const findWord = ["love"];
let selectedWord = findWord[0].toUpperCase();

let usedLetters = [];
let errors = 0;
const bonhommeMembre = document.querySelectorAll(".bonhomme-membre")
const mot = document.getElementById("mot")
const bonneslettre = [""]
const rejouer = document.getElementById("rejouer")
console.log(bonneslettre);


// afficher le mot si on inclut la lettre on fait sinon on laisse vide
function afficherMot() {
    mot.innerHTML = `${selectedWord
        .split('')
        .map(lettre => `<span class= "letter">${bonneslettre.includes(lettre) ? lettre : ''}</span>`
    )
    .join('')
}
`;
bonhommeMembre.forEach((membre, index)=>{
    if(index < errors){
        membre.style.display ='block'
    }
    else {
        membre.style.display = 'none'
    }
    console.log(membre);
})

}
afficherMot()

function btnLetter() {
    document.getElementById("errorCount").textContent= `Erreur : ${errors}`
    document.getElementById("usedLetters").textContent = `Lettres 
    utilisées : ${usedLetters.join(', ')}`
    const selectedLetters = document.getElementById("selectedLetters")
        selectedLetters.innerHTML = "";
    for(let i=65; i<=90; i++) {
        const letter = String.fromCharCode(i)
        if (!usedLetters.includes(letter)) {
            const button = document.createElement("button")
            button.textContent = letter
            button.addEventListener("click", ()=> checkLetter(letter))
            selectedLetters.append(button)
            //console.log(button);
        }
    }
}
function checkLetter(letter) {
    console.log(selectedWord, letter, selectedWord.includes(letter));
    usedLetters.push(letter);
    if (selectedWord.includes(letter)) {
        for(let i=0; i < selectedWord.length; i++){
            if (selectedWord[i] === letter) {
                bonneslettre[i] = letter
            }
        }
    }
    else {
        errors++;
    }
    btnLetter();
    Gamestatus();
    afficherMot()
}

function Gamestatus() {
    const messageFinal = document.querySelector(".messageFinal")
    const messagePerdu = document.querySelector(".message")
    if(bonneslettre.join("") === selectedWord){
        messageFinal.style.display ="block"
    } 
    else if( errors >= 6) {
        messagePerdu.innerText = "vous avez perdu"
        messageFinal.style.display ="block"
    }
}
rejouer.addEventListener("click", resetGame)
console.log(rejouer);
function resetGame() {
    selectedWord = findWord
    const messageFinal = document.querySelector(".messageFinal")
    usedLetters = [];
    errors = 0;
    messageFinal.style.display ="none"
    btnLetter()
}


btnLetter()