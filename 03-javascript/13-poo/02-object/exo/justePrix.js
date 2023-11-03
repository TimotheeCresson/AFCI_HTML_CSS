"use strict"
/*
    Jeu du juste prix qui laisse un utilisateur essayé de deviner un nombre entre 0 et 100 et lui disant si le nombre est plus grand ou plus petit que celui qu'il a choisit
*/

const jeu = {
    titre: "Le Juste Prix",
    Description: "Devinez le juste prix entre 1 et 100", 
    targetNumber: Math.floor(Math.random() * 100) + 1,
    attempts: 0,

    // On crée une fonction démarrant le jeu
    InitGame() {
        const container = document.createElement("div") // on met dnas un container afin que cela se retrouve dans notre div .appli
        const h1 = document.createElement("h1")
        h1.textContent = this.titre;
        container.appendChild(h1);
        const p = document.createElement("p")
        p.textContent = this.Description
        container.append(p)
        container.append(this.createInput(),this.createButton(),this.createMessage()) // on met tout dans notre div
        console.log(this.targetNumber);
        return container;
    },

    // On crée les éléments que l'on a besoin dans le jeu (input, button, textmessage)
    createInput() {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "guessInput");
        return input; // on retourne l'input déclaré avant
    },
    
    createButton() {
        const button = document.createElement("button");
        button.textContent = "Proposer";
        button.onclick = this.checkGuess.bind(this);
        return button // on retourne boutton déclaré avant
    },

    createMessage() {
        const message = document.createElement("p");
        message.setAttribute("id", "message");
        return message // on retourne message déclaré avant
    },

        // on crée une fonction permettant à l'utilisateur de pouvoir deviner le nombre et de dire si le nombre choisi est plus grand ou plus petit 
    checkGuess() {
        console.log(this);
        const userGuess = parseInt(document.getElementById("guessInput").value);
        const message = document.getElementById("message");
    
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
        } else {
            this.attempts++;
            
    
            if (userGuess === this.targetNumber) {
                message.textContent = `Félicitations ! Vous avez deviné le juste prix en ${this.attempts} tentatives.`;
            } else if (userGuess < this.targetNumber) {
                message.textContent = "Le nombre est trop bas. Essayez à nouveau.";
            } else {
                message.textContent = "Le nombre est trop élevé. Essayez à nouveau.";
            }
        }
    }
}
export default jeu





// const input = document.createElement("input");
// input.setAttribute("type", "text");
// input.setAttribute("id", "guessInput");
// document.body.append(input);

// const button = document.createElement("button");
// button.textContent = "Proposer";
// button.onclick = checkGuess;
// document.body.append(button);

// const message = document.createElement("p");
// message.setAttribute("id", "message");
// document.body.append(message);

// // console.log(targetNumber);
// function checkGuess() {
//     const userGuess = parseInt(document.getElementById("guessInput").value);
//     const message = document.getElementById("message");

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
//     } else {
//         attempts++;
        

//         if (userGuess === targetNumber) {
//             message.textContent = `Félicitations ! Vous avez deviné le juste prix en ${attempts} tentatives.`;
//         } else if (userGuess < targetNumber) {
//             message.textContent = "Le nombre est trop bas. Essayez à nouveau.";
//         } else {
//             message.textContent = "Le nombre est trop élevé. Essayez à nouveau.";
//         }
//     }
// }



