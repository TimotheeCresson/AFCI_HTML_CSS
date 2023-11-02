"use strict"
/*
    Jeu du juste prix qui laisse un utilisateur essayé de deviner un nombre entre 0 et 100 et lui disant si le nombre est plus grand ou plus petit que celui qu'il a choisit
*/




document.write("<h1>Le Juste Prix</h1>");
document.write("<p>Devinez le juste prix entre 1 et 100.</p>");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "guessInput");
document.body.append(input);

const button = document.createElement("button");
button.textContent = "Proposer";
button.onclick = checkGuess;
document.body.append(button);

const message = document.createElement("p");
message.setAttribute("id", "message");
document.body.append(message);

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
// console.log(targetNumber);
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
    } else {
        attempts++;
        

        if (userGuess === targetNumber) {
            message.textContent = `Félicitations ! Vous avez deviné le juste prix en ${attempts} tentatives.`;
        } else if (userGuess < targetNumber) {
            message.textContent = "Le nombre est trop bas. Essayez à nouveau.";
        } else {
            message.textContent = "Le nombre est trop élevé. Essayez à nouveau.";
        }
    }
}